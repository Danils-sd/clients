const data = require("../configs/admin.config");

async function singIn(login, password){
    try {
        const docRef = await data.collection("users").where("login", "==", login).get();
        
        if(docRef._size == 0){
            return 401;
        } else {
            const users = [];
            docRef.forEach(e => {
                users.push({
                    uid: e.id,
                    login: e.data().login,
                    password: e.data().password
                })
            })
            if(users[0].password == password){
                return users[0].uid;
            }
            return 402;
        }
    } catch (error) {
        console.log(error);
        return 400;
    }
}

async function getDataUser(uid){
    try {
        const user = await data.collection("users").doc(uid).get();
        return {
            fullName: user.data().fullName,
            login: user.data().login,
        }
    } catch (error) {
        console.log(error);
        return 400;
    }
}

module.exports = {
    singIn,
    getDataUser
}