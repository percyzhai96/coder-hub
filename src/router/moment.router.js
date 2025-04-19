const KoaRouter = require("@koa/router")
const momentRouter = new KoaRouter({ prefix: '/moment' })
const { verifyAuth } = require("../middleware/login.middleware")
const { create, list, detail } = require("../controller/moment.controller")

// 编写接口，创建动态
momentRouter.post("/", verifyAuth, create)
// 查询动态
momentRouter.get("/", list)
// 查询动态详情
momentRouter.get("/:momentId", detail)
// 删除动态

// 修改动态:登录的用户才能修改动态
momentRouter.patch("/:momentId", verifyAuth, update)

module.exports = momentRouter