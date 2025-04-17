const KoaRouter = require("@koa/router")
const { sign, test } = require("../controller/login.controller")
const { verifyLogin, verifyAuth } = require("../middleware/login.middleware")
const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post("/", verifyLogin, sign)
loginRouter.post("/test", verifyAuth, test)

module.exports = loginRouter