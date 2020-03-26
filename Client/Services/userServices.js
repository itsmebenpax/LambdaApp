import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

export default{
    getUser: async() => {
        let res = await axios.get('http://localhost:9000/api/user/getUser').data;
        console.log("UserService: " ,res)
        return res;
    },
    getUserWithID: async (data) => {
        console.log('userService data: ', data)
        let res = await axios.post('http://localhost:9000/api/user/getUserID', data);
        //console.log("UserService: " ,res)
        return res;
    },

    login: async (data) => {
        let res = await axios.post('http://localhost:9000/api/user/login',data);
        console.log(res)
        return res;

    },
    createUser: async (data) => {
        data.password = await bcrypt.hashSync(data.password, 10);
        console.log("UserServices: ",data)
        let res = await axios.post('http://localhost:9000/api/user/createUser', data);
        return res.status;
    },
}