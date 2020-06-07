// 导入 express 第三方模块框架
const express = require('express')
// 导入 第三方 跨域模块
const cors = require('cors');
// 创建 app 服务器
const app = express()

// 导入cors跨域模块并使用实现跨域
app.use(cors());

// 引入 数据库 模块 并把 app服务器 变量传递过去
require("./plugins/db")(app);

// 服务器 监听端口 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
