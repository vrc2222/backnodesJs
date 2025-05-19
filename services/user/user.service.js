const UserDb = require("../user/user.db");

class UserService{
    async validateUser(req){
        console.log("req is: ", req.body);
        return new UserDb().authenticate(req.body);
    }
}

module.exports = UserService;