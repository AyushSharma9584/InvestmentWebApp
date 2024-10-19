const AuthRepo = require('../Repository/Auth.repo')
const UserRepo = require('../Repository/User.repo')
// const validation = require('../Utils/Helpers/Validator.util')
const hashing = require('../Utils/Helpers/Bcrypt.util')
const { createToken } = require('../Utils/Helpers/Token.util')


// Service for Sign_up  ----------------------------------------->

const SignupService = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all inputs",
                code: 201
            })
        }


        // const { valid, reason, validators } = await validation.validateEmail(email)
        // if (!valid) {
        //     return res.status(400).send({
        //         status: 400,
        //         message: "Please provide a valid email address.",
        //         reason: validators[reason].reason
        //     })
        // }

        const existingUser = await UserRepo.getUserByEmailRepo(email)

        if (existingUser.data) {
            return res.status(400).json({
                message: "User already existed with the email",
                code: 400,
                status: "failed"
            })
        }
        else {
            var userData = {
                name,
                email,
                password: await hashing.hashPassword(password)
            }
        }

        const result = await AuthRepo.SignupRepo(userData)


        if (!result) {
            return res.status(400).json({
                status: "failed",
                message: "Failed to signup",
                code: 201
            })
        }
        const userId = result.data._id;
        const userEmail = result.data.email;
        const userName = result.data.name;

        const token = createToken(userId, userEmail, userName);

        return res.status(200).json({
            status: "success",
            message: "User created successfully",
            code: 200,
            data: result.data,
            token: token

        })


    } catch (error) {
        return res.status(500).json({ error: "internal server error service" })

    }
}


//Service for Login -------------------------------------------->

const LoginService = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Please enter email and password",
                code: 400
            })
        }


        const result = await UserRepo.getUserByEmailRepo(email);
        if (result.data == null) {
            return res.status(400).json({
                status: "failed",
                message: "Email not found",
                code: 400
            })
        }

        const comparePassword = await hashing.comparePassword(password, result.data.password);
        if (!comparePassword) {
            return res.status(400).json({
                status: "failed",
                message: "Please enter correct password",
                code: 400
            })
        }
        const userId = result.data._id;
        const userEmail = result.data.email.toLowerCase();
        const userName = result.data.name;

        const token = createToken(userId, userEmail, userName);

        return res.status(200).json({
            status: "success",
            message: "Login Successfull !!!...",
            code: 200,
            token: token
        })




    } catch (error) {
        console.log(error)
    }
}



const getallService = async (req, res) => {
    try {
        const result = await AuthRepo.getallRepo();
        if (result == null) {
            return res.status(400).json({
                status: "failed",
                message: "No users found",
                code: 400
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Users ----",
            code: 200,
            data: result
        })




    } catch (error) {
        console.log(error)
    }
}



const getempservice = async (req, res) => {
    try {
        const { email } = req.body
        const result = await UserRepo.getUserByEmailRepo(email)
        if (result.data == null) {
            return res.status(400).json({
                status: "failed",
                message: "No users found",
                code: 400
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Users ----",
            code: 200,
            data: result.data
        })




    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    SignupService,
    LoginService,
    getallService,
    getempservice
}