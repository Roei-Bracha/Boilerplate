"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('apollo-server-express').gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        hello: String\n    }\n"], ["\n    type Query {\n        hello: String\n    }\n"])));
exports.default = typeDefs;
var templateObject_1;
