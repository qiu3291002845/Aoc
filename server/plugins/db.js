module.exports = (app) => {
  // 引入 mongoose模块
  const mongoose = require("mongoose");
  // 连接数据库
  mongoose
    .connect("mongodb://127.0.0.1:27017/qingniao", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch(() => {
      console.log("数据库连接失败");
    });
};
