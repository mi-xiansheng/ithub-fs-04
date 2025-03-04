// 路由模块

// 0. 加载 express
const express = require('express')

const topicController = require('../controllers/topic')
const topicMiddleware = require('../middlewares/topic')

// 1. 创建路由创建
const router = express.Router()

// 话题相关
router
  .get('/create', topicController.showCreate)
  .post('/create', topicController.create)
  .get('/:topicId', topicController.showDetail)
  .get('/:topicId/edit', topicController.showEdit)
  .post('/:topicId/edit', topicMiddleware.checkEditAndRemove, topicController.edit)
  .post('/:topicId/delete', topicMiddleware.checkEditAndRemove, topicController.delete)

// 评论相关

// 3. 导出路由容器
// 4. app.js
//    加载路由模块得到路由容器
//    app.use(router)
module.exports = router
