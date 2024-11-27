const express = require('express')
const router = express.Router()
const UserController = require('../Controller/User.controller')
const { isAuthenticate } = require('../Middleware/User.middleware')

router.post('/register', isAuthenticate, async (req, res) => {
    try {
        const result = await UserController.RegisterController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.get('/get_all_users', isAuthenticate, async (req, res) => {
    try {
        const result = await UserController.GetAllController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.put('/approval', isAuthenticate, async (req, res) => {
    try {
        const result = await UserController.ApprovalController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.delete('/delete_user', isAuthenticate, async (req, res) => {
    try {
        const result = await UserController.DeleteUserController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.post('/get_kyc', isAuthenticate, async (req, res) => {
    try {
        const result = await UserController.GetKycController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.post('/support', async (req, res) => {
    try {
        const result = await UserController.SupportController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.post('/join_getALL', async (req, res) => {
    try {
        const result = await UserController.joinBothController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

module.exports = router;