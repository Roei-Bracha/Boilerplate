// const express = require("express");
import express , {Request,Response} from 'express';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
const { ApolloServer } = require('apollo-server-express');
const app = express ();


const server = new ApolloServer({ typeDefs, resolvers });

app.get('/',(req :Request , res:Response)=>{
    res.send("hello world")
})


server.applyMiddleware({ app });

export default app