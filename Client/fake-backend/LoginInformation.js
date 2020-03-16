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

    checkCredentials(memberShipNumber, password) {
        if (this.loginValid(memberShipNumber, password)) {
            console.log("Du er nu logget ind.")
        } else {
            console.log("Login fejlede.")
        }
    }

    loginValid(memberShipNumber, password) {
        return memberShipNumber === "851995" && password === "hemmeligt";
    }
}

const login = new LoginInformation();
export default login;