const express = require('express')
const bodyparser = require('body-parser');
// Body-parser parses is an HTTP request body that usually helps when you need to know more than just the URL being hit.
// Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body.
// Using body-parser allows you to access req.body from within routes and use that data.
// const app = require('express')
const mongoose = require('mongoose');
const { hash } = require('bcrypt');

const app  = express();
app.use(bodyparser.json());

const dbURI = ''


app.get('/', function(req, res){
    res.status(200).send(`Welcome to api`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`app is live at ${PORT}`);
}); 

sessionStorage
jwt AuthenticatorAssertionResponse
req.body.params => password => hash(bcrpt)