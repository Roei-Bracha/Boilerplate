import * as express from 'express';
import jwt from 'jsonwebtoken';
import redis from '../db/redis'
import {jwtPayload} from '../interfaces/auth';
import postgers from '../db/postgress';
import bcrypt from 'bcrypt';
import { resolve } from 'dns';
const redisClient = redis.getInstant()
const postgersClient = postgers.getInstance()

//TODO: write test
// this function get the user name and create a jwt tocken for him
const signToken = (username : string) :string =>{
    const jwtPayload : jwtPayload= { username };
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
 //TODO: write the handle signin function
const handleSignin = (req : express.Request, res : express.Response)=>{

}

//TODO: write the auth function
export default function authCheck (req : express.Request, res : express.Response) : void {
    const { authorization } = req.headers;
    authorization ? getAuthTokenId(res , authorization) : handleSignin(req, res)
}

