var users=[
    {
        name: 'benjamin',
        password: 'ben',
        memberShipNumber: 1,
        expireDate: new Date().getDate(),
    },
    {
        name: 'morten',
        password: 'morten',
        memberShipNumber: 2,
        expireDate: new Date().getFullYear(),
    }
]


class LoginInformation {
    getUser(data){
        var user = users.find(users => users.name === data);
        return user;
    }
    getUserName() {
        return 'ben';
    }

    getPassword() {
        return 'hemmeligt';
    }
}

const login = new LoginInformation();
export default login;