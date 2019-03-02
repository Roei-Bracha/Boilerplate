import { User } from './../interfaces/auth';
import * as express from 'express';
import jwt from 'jsonwebtoken';
import redis from '../db/redis'
import {jwtPayload , SetTokenResult} from '../interfaces/auth';
import {gatUserByUserName} from '../db/pgQueries'
import bcrypt from 'bcrypt';
const redisClient = redis.getInstant()

//TODO: write test
// this function get the user name and create a jwt tocken for him
const signToken = (username : string , email:string) :string =>{
    const jwtPayload : jwtPayload= { username , email };
    return jwt.sign(jwtPayload, (process.env.JWT_KEY || 'JWT_KEY') , { expiresIn: '2 days'});
}

const setTokenInRedis  = (key : string, value : string) : Promise<Boolean> => Promise.resolve(redisClient.set(key, value));

const getAuthTokenId = (res : express.Response ,authorization : string ) =>{
    return redisClient.get(authorization , (err , reply)=>{
        if (err || !reply) {
            return res.status(401).send('Unauthorized');
        }
        return res.json({id: reply})
        });
    }

const createSeasion = (user:User) : Promise<SetTokenResult>=>{
    return new Promise((resolve,reject)=>{
        const { email, user_name } = user;
        const token = signToken(user_name,email);
        setTokenInRedis(token,user.id).then(()=>{
            resolve({success:true,userId:user.id,token})
        }).catch((err)=>reject(err))
    })
}


const handleSignin = (req : express.Request, res : express.Response)=>{
    const {username,password} = req.body
    if(!username || !password){
        res.status(400).send("please provide user name and password")
    }
    else{
        gatUserByUserName(username).then((user : User | null)=>{
            if(user===null){
                res.sendStatus(401)
            }
            else{
                if(bcrypt.compareSync(password, user.password_hash)){
                    createSeasion(user).then((data)=>{
                        res.send(data)
                    }).catch((err)=>{
                        console.log(err)
                        res.sendStatus(500)
                    })
                }
                else{
                    res.sendStatus(401)
                }
            }
        })
    }
}


export default function authCheck (req : express.Request, res : express.Response) : void {
    const { authorization } = req.headers;
    if(!authorization) res.status(401).send("please provide authorization header")
    authorization ? getAuthTokenId(res , authorization) : handleSignin(req, res)
}

