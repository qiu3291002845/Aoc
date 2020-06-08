module.exports = (app) => {
  // 引入 express
  const express = require("express");
  // 引入 express 路由
  const router = express.Router({
    // 导入父级参数到子级配置
    mergeParams: true,
  });
  // 创建商品接口
  router.post("/products/edit", async (req, res) => {
    const model = await require("../../model/Product").create(req.body);
    res.send(model);
  });
  // 查询商品接口
  router.get("/products/list", async (req, res) => {
    const model = await require("../../model/Product").find({});
    res.send(model);
  });
  // 编辑查询商品接口
  router.get("/products/edit/:id", async (req, res) => {
    const model = await require("../../model/Product").findById(req.params.id);
    res.send(model);
  });
  // 编辑商品提交接口
  router.post("/products/edit/:id", async (req, res) => {
    const model = await require("../../model/Product").updateOne(
      { _id: req.params.id },
      req.body
    );
    res.send(model);
  });
  // 删除商品接口
  router.delete("/products/list/:id", async (req, res) => {
    const model = await require("../../model/Product").deleteOne({
      _id: req.params.id,
    });
    res.send(model);
  });
  // 文件上传接口
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "./../../upload" });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/upload/${file.filename}`;
    // + "." + file.originalname.split(".")[1]
    res.send(file);
  });
  // 创建 服务器中间件
  app.use("/admin/api/", router);
};
