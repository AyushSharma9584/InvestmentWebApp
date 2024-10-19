const express = require('express')
const router = express.Router()
const AuthController = require('../Controller/Auth.controller')

router.post('/signup', async (req, res) => {
    try {
        const result = await AuthController.SignupController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})

router.post('/login', async (req, res) => {
    try {
        const result = await AuthController.LoginController(req, res)
        return result

    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error routerr" })

    }
})

router.get('/getall', async (req, res) => {
    try {
        const result = await AuthController.getallController(req, res)
        return result

    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error routerr" })

    }
})


router.post('/getemployee', async (req, res) => {
    try {
        const result = await AuthController.getempcontroller(req, res)
        return result

    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error routerr" })

    }
})




module.exports = router;