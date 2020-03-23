import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

export default{
    getusers: async() => {
        let res = await axios.get('http://localhost:9000/api/user/');
        return res;
    },

    login: async (data) => {
        let res = await axios.post('http://localhost:9000/api/user/login', data);
        console.log(res)
        return res;

    },
    createUser: async (data) => {
        data.password = await bcrypt.hashSync(data.password, 10);
        let res = await axios.post('http://localhost:9000/api/user/createUser', data);
        return res.status;
    },
}