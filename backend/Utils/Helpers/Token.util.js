const jwt = require('jsonwebtoken');
const Secret_Key = process.env.Secret_Key

const createToken = (userId, userEmail, userName) => {
    try {
        console.log(userId, userEmail, userName)
        const token = jwt.sign({ userId, userEmail, userName }, Secret_Key, { expiresIn: "5h" });
        return token;

    } catch {
        console.log("error in token creation", error)
        throw error;
    }
}

module.exports = { createToken }