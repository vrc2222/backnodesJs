const UserDb = require("../user/user.db");

class UserService{
    async validateUser(req){
        console.log("req is: ", req.body);
        return new UserDb().authenticate(req.body);
    }

    async create(req){
        console.log("req is: ", req.body);
        return new UserDb().create(req.body);
    }
    async getUsersByRole (req){
        return new UserDb().getUsersByRole();
    }
    async deleteUser (req){
        return new UserDb().deleteUser(req);
    }
    

}

module.exports = UserService;