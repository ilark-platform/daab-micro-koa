import Koa from 'koa'
import creditRoute from "./route/creditRoute.js";
import Router from "koa-router";
import creditServerListenUnit from "./unit/creditServerListenUnit.js";
import creditClientUnit from "./unit/creditClientUnit.js";




const app = new Koa
const router = new Router()


creditServerListenUnit.exec(2034)


router.use('/', creditRoute.routes())

app.use(router.routes()).use(router.allowedMethods())
app.listen(8092, () => {
  console.log('Listening to port 8092');
});
