const UserService = require('./user.service');

function validateUser(req, res, next){
    new UserService()
    .validateUser(req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error: 'Error al validar el usuario'});
    })
}

module.exports = {
    validateUser,
}