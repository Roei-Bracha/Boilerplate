"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('apollo-server-express').gql;
var resolvers = {
    Query: {
        hello: function () { return 'Hello world!'; }
    }
};
exports.default = resolvers;
