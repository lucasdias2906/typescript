"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    return res.send("hello world 2");
});
app.listen(3333);
// fluxo de desenvolvimento, conseguir ter o feed back em tempo real, manter aqrquivos s´o em ts
