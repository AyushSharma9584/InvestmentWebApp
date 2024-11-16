const express = require('express')
const UserService = require('../Service/User.service')


const RegisterController = async (req, res) => {
    try {
        const result = await UserService.RegisterService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const SupportController = async (req, res) => {
    try {
        const result = await UserService.SupportService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}


module.exports = {
    RegisterController,
    SupportController

}