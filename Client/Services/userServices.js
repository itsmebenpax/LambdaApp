import axios from 'axios';

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

    tester: async() => {
        console.log('service')
        let res = await axios.get('http://localhost:9000/api/user/tester');
        console.log(res);
        return res;
    }
}