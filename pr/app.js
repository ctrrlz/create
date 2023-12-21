const express = require('express');
const bodyParser= require('body-parser');
const router = require('./routes')
const app = express();

consr PORT =  process.env.PORT || 2007

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res))