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
            const user = await axios.post(Expo.Constants.manifest.extra.endpoint+'getUser',token,{headers:{'authorizationToken':data}})
            console.log(user)
            return user.data.body
        } catch (error) {
            console.log('User Error', error)
            return user.status
        }
    },

    login: async (data) => {
        console.log('UserService Login: ', data)
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
            data.password = await bcrypt.hashSync(data.password, 10);
            const result = await axios.post(Expo.Constants.manifest.extra.endpoint+'createUser', data);
            console.log("After: ",result); 
            return result.status
        } catch (error) {
            console.log("error")
            return result.status
        }
    },
    createMember: async (data) => {
        try {
            console.log("create member object before: ",data)
            data.password = await bcrypt.hashSync(data.password, 10);
            const result = await axios.post(Expo.Constants.manifest.extra.endpoint+'createMember', data);
            console.log("After: ",result); 
            return result.status
        } catch (error) {
            console.log("error", error)
            return error
        }
    },
    updateUser: async (data) => {
        let auth = {'authorizationToken':data.token}
        console.log("userservices: ",data)
        console.log(auth)
        try{
            const res = await axios.post(Expo.Constants.manifest.extra.endpoint+'editUser', data,{headers:{'authorizationToken':auth}});
            console.log("editUser work", res)
            return res.status
        } catch (error) {
            console.log("edit error:", error)
            return error
        }
    }
}