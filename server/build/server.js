"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = __importDefault(require("express"));
var typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var ApolloServer = require('apollo-server-express').ApolloServer;
var app = express_1.default();
var server = new ApolloServer({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
app.get('/', function (req, res) {
    res.send("hello world");
});
server.applyMiddleware({ app: app });
exports.default = app;
