const express = require('express')
const User = require("../Model/User.model")
const SignupRepo = async (userData) => {
    try {
        const data = { ...userData, email: userData.email.toLowerCase() }
        const user = new User(data);
        const createdUser = await user.save();
        if (!createdUser) {
            return res.status(400).json({ message: "Failed to create user" })
        }
        return {
            message: "User created successfully",
            code: 200,
            data: createdUser
        }


    } catch (error) {
        return { message: "Internal Server Error repo" };

    }
}

const LoginRepo = async (credentials) => {
    try {
        const email = credentials.email.toLowerCase()
        const result = await User.findOne({ email })
        if (!result) {
            return {
                status: "failed",
                message: "Credential incorrect ,invalid email",
                code: 400


            };
        } else {
            return {
                status: "Success",
                message: "Login Successfull !!!....",
                code: 200
            }
        }

    } catch (error) {
        throw error

    }
}


const getallRepo = async () => {
    try {

        const result = await User.find()
        if (!result) {
            return result
        } else {
            return result
        }

    } catch (error) {
        throw error

    }
}

module.exports = {
    SignupRepo,
    LoginRepo,
    getallRepo
}