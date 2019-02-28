import pg from './postgress'
const pool = pg.getInstance()

export function checkAuth(userName:string, hash:string) : Promise<boolean>{
    return new Promise((resolve,reject)=>{
        pool.query(`select * from users where user_name=${userName} and password_hash=${hash}`).then((data)=>{
            if(data.rowCount!==0){
                resolve(true)
            }
            else{
                resolve(false)
            }
        }).catch(err=>reject(err))
    })
}