const bcrypt = require('bcrypt');
const userList = require('./../server')
module.exports = (app) => {
    
    app.get('api/user', async (req, res) => {
        console.log('router')
        let users = await userList.getUsers();
        return res.status(200).send(users);
    });
}