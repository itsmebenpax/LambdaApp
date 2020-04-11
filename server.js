const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
require('dotenv').config();


const app = express()
const port = 9000

// server setup
app.use(cors());

// Parse middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: ['RS256']
});
app.use(jwtCheck);

app.get('/api/user/getUser', async (req,res) => {
    console.log(req)
    const user = await axios.get(process.env.AWS_ENDPOINT+'getUser', {headers: {'x-api-key': process.env.AWS_KEY}})
    console.log('User data: ',user.data.body);
    return res.send(user.data)
});

app.post('/api/user/getUserID', async (req,res) => {
    try {
        const user = await axios.post(process.env.AWS_ENDPOINT+'getUser',req.body,{headers: {'x-api-key':process.env.AWS_KEY}});
        return res.send(user.data.body.Items[0])
    } catch (error) {
        return res.send("error")
    }
});

app.post('/api/user/createUser', async (req, res) => {
    const user = {
        user_id: req.body.user_id,
        email: req.body.email,
        membership_number: req.body.membership_number,
        password_hash: req.body.password
    }
    try {
        console.log("User object: ",user)
        const result = await axios.post(process.env.AWS_ENDPOINT+'createUser', user, {headers: {'x-api-key': process.env.AWS_KEY}});
        return res.send(result.status) 
    } catch (error) {
        return res.status("Error")
    }
});

app.post('/api/user/login', async (req, res) => {
    console.log("login server",req.body)
    try {
        const user = await axios.post(process.env.AWS_ENDPOINT+'validateLogin', req.body) 
    } catch (error) {
        
    }
    
    if(user !== undefined){
        if(user.password === req.body.password)
        {
        console.log('server')
        return res.status(200).send(user);
        } else{
            return res.status(401).send('password does not match')}
        }  
    else{
        console.log('server faild')
        return res.status(404).send('User not found!')}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))