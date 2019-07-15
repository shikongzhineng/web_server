const express=require('express');
const serveIndex = require('serve-index');
//创建服务器
var server=express();
server.listen(8000);
server.use(express.static('./'),serveIndex('./',{'view': 'details'}));
