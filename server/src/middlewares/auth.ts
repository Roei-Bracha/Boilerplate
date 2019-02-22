import * as express from 'express';
import jwt from 'jsonwebtoken';
import redis from '../db/redis'
import {jwtPayload} from '../interfaces/auth'

const redisClient = redis.getInstant()

//TODO: write test
// this function get the user name and create a jwt tocken for him
const signToken = (username : string) :string =>{
    const jwtPayload : jwtPayload= { username };
    return jwt.sign(jwtPayload, (process.env.JWT_KEY || 'JWT_KEY') , { expiresIn: '2 days'});
}

const setTokenInRedis = (key : string, value : string) => Promise.resolve(redisClient.set(key, value));

//TODO: write the auth function
export default function authCheck (req : express.Request , res : express.Response, next : express.NextFunction) : void{

}

