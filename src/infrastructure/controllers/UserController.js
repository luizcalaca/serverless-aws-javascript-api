const User = require("../../domain/entities/User");
const UserUseCase = require("../../domain/usecases/UserUseCase");

class UserController {
    
    constructor() {
        this.userUseCase = new UserUseCase()
    }

    addUser = async (req, res) => {
        try {
            const {username, password} = req.body
            const userEntity = new User()
            userEntity.username = username
            userEntity.password = password

            const results = await this.userUseCase.add(userEntity)
            if (!results) {
                return res.status(404).json({ message: 'Não há elementos :(' });
            }
            return res.status(200).json(results);
        } catch (err) {
          console.error(err);
          return res.status(500).json({ message: 'Erro ao tentar realizar operação' });
        }
    }
}

module.exports = UserController

