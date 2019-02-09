import server from './server'

const port = process.env.PORT || 80
server.listen(port ,()=>{
    console.log(`the server is runing on port ${port}`)
})
console.log(process.env.POSTGRES_URI)