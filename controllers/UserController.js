const { user } = require("../models/index");
const uuidv4 = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET

class UserController {
    // static async register(req, res, next) {
    //     try {
    //         const { username, password } = req.body;
    //         const foundUser = await user.findOne({ where: { username } });

    //         if (foundUser) {
    //             return res.send({ code: 409, msg: "email already in use" })
    //         }
    //         const user_id = uuidv4.v4();
    //         const createdUser = await user.create({
    //             user_id,
    //             username,
    //             password
    //         })
    //         delete createdUser.dataValues.password;
    //         res.send(createdUser);
    //     } catch (err) {
    //         res.send(err)
    //     }
    // }
    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const foundUser = await user.findOne({ where: { username } });
            if (foundUser == null) {
                return res.send({ code: 404 })
            }
            const isValid = bcrypt.compareSync(password, foundUser.dataValues.password);
            if (isValid) {
                const tokenData = { username: foundUser.username, user_id: foundUser.user_id }

                const token = jwt.sign(tokenData, secret);
                
                res.send({status: 200, token})
            } else {
                res.send({code: 403, status: "error", message: "wrong username/email"})
            }
        } catch (err) {
            res.send({code: 500, status: "Internal Server Error"})
        }
    }
}
module.exports = UserController;