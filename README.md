1.目录结构
---------------
1. models: 存放操作数据库的文件
2. public: 存放静态文件，如样式、图片等
3. routes: 存放路由文件
4. views: 存放模板文件
5. index.js: 程序主文件
6. package.json: 存储项目名、描述、作者、依赖等等信息
 
2.安装依赖模块
----------------
1. express: web 框架
2. express-session: session 中间件
3. connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
4. connect-flash: 页面通知的中间件，基于 session 实现
5. ejs: 模板
6. express-formidable: 接收表单及文件上传的中间件
7. config-lite: 读取配置文件
8. marked: markdown 解析
9. moment: 时间格式化
10. mongolass: mongodb 驱动
11. objectid-to-timestamp: 根据 ObjectId 生成时间戳
12. sha1: sha1 加密，用于密码加密
13. winston: 日志
14. express-winston: express 的 winston 日志中间件

3.功能与路由设计
------------

1. 注册
    1. 注册页：`GET /signup`
    2. 注册（包含上传头像）：`POST /signup`
2. 登录
    1. 登录页：`GET /signin`
    2. 登录：`POST /signin`
3. 登出：`GET /signout`
4. 查看文章
    1. 主页：`GET /posts`
    2. 个人主页：`GET /posts?author=xxx`
    3. 查看一篇文章（包含留言）：`GET /posts/:postId`
5. 发表文章
    1. 发表文章页：`GET /posts/create`
    2. 发表文章：`POST /posts/create`
6. 修改文章
    1. 修改文章页：`GET /posts/:postId/edit`
    2. 修改文章：`POST /posts/:postId/edit`
7. 删除文章：`GET /posts/:postId/remove`
8. 留言
    1. 创建留言：`POST /comments`
    2. 删除留言：`GET /comments/:commentId/remove`
