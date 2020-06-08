// 引入 mongoose 模块
const mongoose = require("mongoose");
// 新建规则
const schema = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  url: {
    type: String,
  },
});
module.exports = mongoose.model("Product", schema);
