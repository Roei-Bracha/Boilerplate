"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var postgressSingelton = /** @class */ (function () {
    function postgressSingelton() {
        this.singelton = null;
        this.getInstance = this.getInstance.bind(this);
    }
    postgressSingelton.prototype.getInstance = function () {
        if (this.singelton === null) {
            this.singelton = new pg_1.Pool({
                connectionString: process.env.POSTGRES_URI,
            });
        }
        return this.singelton;
    };
    return postgressSingelton;
}());
exports.default = new postgressSingelton();
//to use postgress
// import postgresSingelton from './db/postgress'
// const pool = postgresSingelton.getInstance()
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })
