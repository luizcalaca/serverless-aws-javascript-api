const User = require("../entities/User");

class UserRepository {

    add(userEntity){
        const user = new User()
        user.username = userEntity.username
        user.password = userEntity.password

        return user
    }
}

module.exports = UserRepository