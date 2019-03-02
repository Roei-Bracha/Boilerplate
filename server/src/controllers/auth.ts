import { User } from './../interfaces/auth';
import * as express from 'express';
import jwt from 'jsonwebtoken';
import redis from '../db/redis'
import {jwtPayload , SetTokenResult} from '../interfaces/auth';
import {getUserByUserName , signUpUser} from '../db/pgQueries'
import bcrypt, {hashSync} from 'bcrypt';
const redisClient = redis.getInstant()

//TODO: write test
// this function get the user name and create a jwt tocken for him
const signToken = (username : string , email:string) :string =>{
    const jwtPayload : jwtPayload= { username , email };
    return jwt.sign(jwtPayload, (process.env.JWT_KEY || 'JWT_KEY') , { expiresIn: '2 days'});
}

const setTokenInRedis  = (key : string, value : string) : Promise<Boolean> => Promise.resolve(redisClient.set(key, value));

const getAuthTokenId = (res : express.Response ,authorization : string ) =>{
    let payload = {}
    try{
        payload = jwt.verify(authorization,(process.env.JWT_KEY || 'JWT_KEY'))
    }
    catch(err){
        return res.sendStatus(401)
    }
    return redisClient.get(authorization , (err , reply)=>{
        if (err || !reply) {
            return res.status(401).send('Unauthorized');
        }
        return res.json({id: reply,...payload})
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
    const {userName,password} = req.body
    if(!userName || !password){
        res.status(400).send("please provide user name and password")
    }
    else{
        getUserByUserName(userName).then((user : User | null)=>{
            if(user===null){
                res.sendStatus(401)
            }
            else{
                bcrypt.compare(password, user.password_hash).then((compareResult)=>{
                    if(compareResult){
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
                })
            }
        }).catch((err)=>{
            res.sendStatus(500)
            console.log(err)
        })
    }
}

export function signup(req : express.Request, res : express.Response) : void{
    const {userName,password,email} = req.body;
    if(!userName || !password || !email){
        res.sendStatus(400)
    }
    else{
        const hashPassword = hashSync(password, process.env.PASSWORD_SALT || 1)
        signUpUser(userName,hashPassword,email).then(()=>{
            handleSignin(req,res)
        }).catch((err)=>res.sendStatus(400))
    }
}

export function authCheck (req : express.Request, res : express.Response) : void {
    const { authorization } = req.headers;
    authorization ? getAuthTokenId(res , authorization) : handleSignin(req, res)
}

