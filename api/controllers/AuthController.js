const Users = require("../models/Users");
const Auth = require("../config/auth");
const UserController = require("./UserController");

class AuthController {
  static login = async (req, res) => {
    try {
      const user = await Users.findOne({ where: { email: req.body.email } });

      // console.log(user);
      if (!user)
        return res.status(404).json({ message: "Usuario não encontrado." });

      const { password } = req.body;

      if (Auth.checkPassword(password, user.hash, user.salt)) {
        const token = Auth.generateJWT(user);
        return res.status(200).json({ token: token });
      } else {
        return res.status(401).json({ message: "Senha invalida" });
      }
    } catch (e) {
      return res.status(500).json({ err: e });
    }
  };

  static getDetails = async (req, res) => {
    try {
      const token = Auth.getToken(req);
      const payload = Auth.decodeJwt(token);
      const user = await Users.findByPk(payload.sub);

      if (!user)
        return res.status(404).json({ message: "Usuario não encontrado." });

      return res.status(200).json({ user: user });
    } catch (e) {
      return res.status(500).json({ err: e });
    }
  };
}

module.exports = AuthController;
