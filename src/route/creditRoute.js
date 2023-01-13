import Router from 'koa-router'
import creditController from "../controller/creditController.js";

const creditRoute = new Router()

creditRoute.get('/', ctx => {
  ctx.body = creditController.create()
})


export default creditRoute