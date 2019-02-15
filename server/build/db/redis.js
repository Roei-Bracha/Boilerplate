"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis = __importStar(require("redis"));
var redisSingelton = /** @class */ (function () {
    function redisSingelton() {
        var _this = this;
        this.getInstant = function () {
            if (_this.singelton === null) {
                _this.singelton = redis.createClient(6379, process.env.REDIS_URI);
            }
            return _this.singelton;
        };
        this.singelton = null;
        this.getInstant = this.getInstant.bind(this);
    }
    return redisSingelton;
}());
exports.default = new redisSingelton();
//using the redis client:
// const redisClient = redisSingelton.getInstant()
// redisClient.set("check","hii",(err,status)=>{ // set a new value
//     console.log(status)
//     redisClient.get("check",(err,data)=>{ // get the value
//         console.log(data)
//     })
// });
