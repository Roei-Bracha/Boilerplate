import {Pool} from 'pg'

class postgressSingelton {
    singelton : null | Pool
    constructor(){
        this.singelton = null
        this.getInstance = this.getInstance.bind(this)
    }
    getInstance(): Pool{
        if(this.singelton === null){
            this.singelton = new Pool({
                connectionString: process.env.POSTGRES_URI,
            })
            this.singelton.on('error', (err, client) => {
                console.error('POSTGRESS: Unexpected error on idle client', err)
            })
        }
        return this.singelton
    }
}

export default new postgressSingelton()

//to use postgress
// import postgresSingelton from './db/postgress'

// const pool = postgresSingelton.getInstance()
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })
