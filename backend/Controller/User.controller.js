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

const GetAllController = async (req, res) => {
    try {
        const result = await UserService.GetAllService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}


const ApprovalController = async (req, res) => {
    try {
        const result = await UserService.ApprovalService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const DeleteUserController = async (req, res) => {
    try {
        const result = await UserService.DeleteUserService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const GetKycController = async (req, res) => {
    try {
        const result = await UserService.GetKycService(req, res);
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

const AllSupportController = async (req, res) => {
    try {
        const result = await UserService.AllSupportService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const joinBothController = async (req, res) => {
    try {
        const result = await UserService.joinBothService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const delSupportController = async (req, res) => {
    try {
        const result = await UserService.delSupportService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}


module.exports = {
    RegisterController,
    SupportController,
    GetAllController,
    DeleteUserController,
    GetKycController,
    ApprovalController,
    joinBothController,
    AllSupportController,
    delSupportController

}