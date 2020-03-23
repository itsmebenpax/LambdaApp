const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')
require('dotenv').config();


const app = express()
const port = 9000

// server setup
app.use(cors());

// Parse middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let usersList =[{
    firstName: "Morten",
    lastName: "Skovgaard",
    userName: "MSJ",
    password: "12345"
},
{
    firstName: "Benjamin",
    lastName: "Perbst",
    userName: "Benja",
    password: "password"
}]


app.get('/api/user', async (req, res) => {
    const result = usersList.find(({ userName }) => userName === req.body.username );
return res.send(result)});

app.post('/api/user/login', async (req, res) => {
    console.log(req.body)
    const user = usersList.find(({userName}) => userName === req.body.userName)
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


app.post('/api/user/createUser', async (req, res) => {
    const user = {
        user_id: req.body.user_id,
        email: req.body.email,
        membership_number: req.body.membership_number,
        password_hash: req.body.password
    }
    console.log(user);
    try {
        const result = await axios.post(process.env.AWS_ENDPOINT+'createUser', {headers: {'x-api-key': process.env.AWS_KEY}}, user);
        return res.send(result.status) 
    } catch (error) {
        return res.send('shit broke ', error)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))