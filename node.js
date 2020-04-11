const httpPort = 19876;
var express = require('express');
var app = express();
app.use(express.static("./docs/.vuepress/dist")).listen(httpPort);