const UserRepository = require("../repository/UserRepository")

class UserUseCase {

    constructor(){
        this.userRepository = new UserRepository()
    }

    async add(entityUser){
        const result = this.userRepository.add(entityUser)
        return result
    }
}

module.exports = UserUseCase