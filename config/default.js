/**
 * Created by Administrator on 2018/1/18 0018.
 */
/*
  1. port: 程序启动要监听的端口号
  2. session: express-session 的配置信息，后面介绍
  3. mongodb: mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名
 */
module.exports = {
  port: 3000,
  session: {
    secret: 'blog',
    key: 'blog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/blog'
}
