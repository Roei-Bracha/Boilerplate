// const express = require("express");
import express , {Request,Response} from 'express';
import * as bodyParser from 'body-parser';
import  { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

//config
const app = express ();
const server = new ApolloServer({ typeDefs, resolvers });

//Middleware
app.use(bodyParser.json());

//Routes
app.get('/',(req :Request , res:Response)=>{
    res.send("hello world")
})


server.applyMiddleware({ app });

export default app