import server from './server'

const port = process.env.PORT || 4000
server.listen(port ,()=>{
    console.log(`the server is runing on port ${port}`)
})