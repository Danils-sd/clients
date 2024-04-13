const data = require("../configs/admin.config");

async function getUsers(uid){
    try {
        const user = await data.collection("users").doc(uid).get();
        const FIO = user.data().fullName;
        const docRef = await data.collection("clients").where("FIO", "==", FIO).get();
        const users = [];
        docRef.forEach(e => {
            users.push({
                uid: e.id,
                check: e.data().check,
                fName: e.data().fName,
                sName: e.data().sName,
                tName: e.data().tName,
                date: e.data().date,
                INN: e.data().INN,
                status: e.data().status
            })
        })
        return users;
    } catch (error) {
        console.log(error);
        return 410;
    }
}

async function changeStatus(uid, status){
    try {
        const user = await data.collection("clients").doc(uid).update({status: status});
        console.log(user);
        return 210;
    } catch (error) {
        console.log(error);
        return 420;
    }
}
module.exports = {
    getUsers,
    changeStatus
}