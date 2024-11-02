const jwt = require('jsonwebtoken');
const Secret_Key = process.env.Secret_Key

const createToken = (userId, userEmail, userName) => {
    try {
        const token = jwt.sign({ userId, userEmail, userName }, Secret_Key, { expiresIn: "1m" });
        console.log("token", token)
        return token;

    } catch {
        console.log("error in token creation", error)
        throw error;
    }
}

module.exports = { createToken }