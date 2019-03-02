import { User } from './../interfaces/auth';
import pg from './postgress'
const pool = pg.getInstance()

export function gatUserByUserName(userName:string) : Promise<User | null>{
    return new Promise((resolve,reject)=>{
        pool.query(`select * from users where user_name=${userName}`).then((data)=>{
            if(data.rowCount!==0){
                resolve(data.rows[0])
            }
            else{
                resolve(null)
            }
        }).catch(err=>reject(err))
    })
}