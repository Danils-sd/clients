const data = require("../configs/admin.config");

async function getUsers(FIO){
    try {
        const docRef = await data.collection("clients").where("FIO", "==", FIO).get();
        const users = [];
        docRef.forEach(e => {
            users.push({
                uid: e.id,
                check: e.data().check,
                fName: e.data().fName,
                sName: e.data().sName,
                tHame: e.data().tHame,
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