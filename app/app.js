"use strict";

const express = require('express');
const app = express();
const fs = require('fs');
const homeHtmlPath = __dirname + '/home.html';
const staticPath = fs.realpathSync(__dirname + '/../public');
const port = 3000;

app.get('/', function (req, res) {
    fs.readFile(homeHtmlPath, 'utf8', function(err, text){
        return res.send(text);
    }); 
}); 

console.log(staticPath);
app.use('/public', express.static(fs.realpathSync(__dirname + '/../public')));

app.listen(port, () => {
    console.log('Server started http://localhost:' + port);
});
