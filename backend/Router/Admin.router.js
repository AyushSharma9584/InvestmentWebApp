const express = require('express')
const router = express.Router()
const AdminController = require('../Controller/Admin.controller')

router.post('/add', async (req, res) => {
    try {
        const result = await AdminController.AddController(req, res);
        return result
    } catch (error) {
        console.log("error in router " + error)
        return res.status(400).json({ error: "internal server error router" })
    }
})


module.exports = router;