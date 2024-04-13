const usersService = require("../services/users.service");

async function getUsers(req, res){
    try {
        res.json({data: await usersService.getUsers(req.body.FIO)});
    } catch (error) {
        console.log(error);
    }
}

async function changeStatus(req, res){
    try {
        res.json({data: await usersService.changeStatus(req.body.uid, req.body.status)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers,
    changeStatus
}