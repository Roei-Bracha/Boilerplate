import * as redis from "redis";

class redisSingelton {
    _singelton : null | redis.RedisClient
    constructor() {
        this._singelton  = null
        this.getInstant = this.getInstant.bind(this);
    }
    getInstant = () : redis.RedisClient =>{
        if(this._singelton === null){
            this._singelton = redis.createClient(6379,process.env.REDIS_URI);
        }
        return this._singelton
    }
}

export default new redisSingelton()

//using the redis client:
// const redisClient = redisSingelton.getInstant()
// redisClient.set("check","hii",(err,status)=>{ // set a new value
//     console.log(status)
//     redisClient.get("check",(err,data)=>{ // get the value
//         console.log(data)
//     })
// });