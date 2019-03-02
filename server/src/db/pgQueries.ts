import { User } from './../interfaces/auth';
import pg from './postgress'
const pool = pg.getInstance()

export function gatUserByUserName(userName:string) : Promise<User | null>{
    return new Promise((resolve,reject)=>{
        pool.query(`select * from users where user_name=($1)`,[userName]).then((data)=>{
            if(data.rowCount!==0){
                resolve(data.rows[0])
            }
            else{
                resolve(null)
            }
        }).catch(err=>reject(err))
    })
}

export function signUpUser(userName:string,hashPassword:string,email:string): Promise<Boolean>{
    return new Promise((reslove,reject)=>{
        pool.query(`INSERT into users(user_name ,password_hash , email, joinTime) VALUES ($1 ,$2, $3 , $4);`
        ,[userName,hashPassword,email,new Date()]).then((data)=>{
            console.log(data)
            reslove(true)
        }).catch(err=>reject(err))
    })
}