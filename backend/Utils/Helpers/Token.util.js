var jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const Secret_Key = process.env.Secret_Key

const createToken = (userId, userEmail, userName) => {
    try {
        const token = jwt.sign({ userId, userEmail, userName }, Secret_Key, { expiresIn: "5h" });
        return token;

    } catch {
        console.log("error in token creation")
        throw error;
    }
}

module.exports = { createToken }