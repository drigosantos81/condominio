const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

// const routes = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(express.static('public/img'));
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
// server.use(routes);

server.set("view engine", "html");

nunjucks.configure("src", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res) {
    return res.render('index');
});

server.get('/moradores', function(req, res) {
    return res.render('admin/moradores');
});

server.get('/fornecedores', function(req, res) {
    return res.render('admin/fornecedores');
});

server.listen(5002, function() {
    console.log("Servidor ligado.");    
});
