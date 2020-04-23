const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();


const app = express()
const port = 9000

// server setup
app.use(cors());

// Parse middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    var username = req.body.user;
    if(username.includes("@")){
        data = {
            "email":username,
            "password":req.body.password
        }
    } else if(/[0-9]/.test(username)){
        data = {
            "membership_number":username,
            "password":req.body.password
        }
    } else{
        return res.send("Ikke godkendt login info ")
    }
    try {
        const user = await axios.post(process.env.AWS_ENDPOINT+'login', data);
        return res.send(user.data.token)
    } catch (error) {
        
        console.log("Shits broke")
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))