const express = require('express')
const Admin = require("../Model/Admin.model")


const AddController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all inputs",
                code: 201
            })
        }
        const data = {
            name: name,
            email: email,
            password: password
        }

        const admin = new Admin(data);
        const createdAdmin = await admin.save();
        if (!createdAdmin) {
            return res.status(400).json({ message: "Failed to create Admin" })
        }
        return {
            message: "Admin created successfully",
            code: 200,
            data: createdAdmin
        }


    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}


module.exports = {
    AddController
}