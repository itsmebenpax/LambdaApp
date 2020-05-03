import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

export default{
    getUser: async() => {
        let res = await axios.get('http://localhost:9000/api/user/getUser').data;
        return res;
    },
    getUserWithID: async (data) => {
        let token = {'authorizationToken':data}

        try {
            console.log('I am here', token)
            const user = await axios.post(Expo.Constants.manifest.extra.endpoint+'getUser',token,{headers:{'authorizationToken':data}})
            return user.data.body
        } catch (error) {
            console.log('User Error', error)
            return user.status
        }
    },

    login: async (data) => {
        /*let res = await axios.post('http://localhost:9000/api/user/login',data);
        console.log("USER_SERVICES:", res)
        return res;
*/      console.log('UserService Login: ', data)
        var username = data.user;
        if(username.includes("@")){
            data = {
                "email":username,
                "password":data.password
            }
        } else if(/[0-9]/.test(username)){
            data = {
                "membership_number":username,
                "password":data.password
            }
        } else{
            return "Ikke godkendt login info "
        }
        try {
            const user = await axios.post(Expo.Constants.manifest.extra.endpoint+'login', data);
            console.log('After call',user)
            return {token: user.data.token, status:user.status} 
        } catch (error) {
            
            console.log("Shits broke")
        }

    },
    createUser: async (data) => {
        try {
            console.log("User object before: ",data)
            data.password = await bcrypt.hashSync(data.password, 10);
            console.log("User object after: ",data)
            const result = await axios.post(Expo.Constants.manifest.extra.endpoint+'createUser', data);
            console.log("After: ",result); 
            return result.status
        } catch (error) {
            console.log("error")
            return result.status
        }

    },
}