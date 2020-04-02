import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

export default{
    getUser: async() => {
        let res = await axios.get('http://localhost:9000/api/user/getUser').data;
        return res;
    },
    getUserWithID: async (data) => {
        let res = await axios.post('http://localhost:9000/api/user/getUserID', data);
        return res.data;
    },

    login: async (data) => {
        console.log("login services", data)
        let res = await axios.post('http://localhost:9000/api/user/login',data);
        return res;

    },
    createUser: async (data) => {
        data.password = await bcrypt.hashSync(data.password, 10);
        let res = await axios.post('http://localhost:9000/api/user/createUser', data);
        return res.status;
    },
}