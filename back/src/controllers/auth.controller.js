const authService = require("../services/auth.service");

async function singIn(req, res){
    try {
        res.json({data: {res: await authService.singIn(req.body.login, req.body.password)}});
    } catch (error) {
        console.log(error);
    }
}

async function getDataUser(req, res){
    try {
        res.json({data: await authService.getDataUser(req.params.uid)});
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    singIn,
    getDataUser
}