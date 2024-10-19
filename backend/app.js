const express = require('express')
const cors = require("cors")
const app = express();
const AuthRouter = require('./Router/Auth.router');
const UserRouter = require('./Router/User.router');

// const ProductRouter = require('./Router/Product.router')

app.use(express.json())
app.use(cors())



app.use("/auth/api", AuthRouter)
app.use("/user/api", UserRouter)



module.exports = app

