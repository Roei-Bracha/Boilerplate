import * as redis from "redis";

class redisSingelton {
    singelton : null | redis.RedisClient
    constructor() {
        this.singelton  = null
        this.getInstant = this.getInstant.bind(this);
    }
    getInstant = () : redis.RedisClient =>{
        if(this.singelton === null){
            this.singelton = redis.createClient(6379,process.env.REDIS_URI);
        }
        return this.singelton
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