<template>
  <div>
    <h1>{{ this.id ? "编辑" : "新建" }}商品</h1>
    <el-form ref="form" label-width="80px" @submit.native.prevent="save">
      <el-form-item label="商品标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload class="avatar-uploader" :action="$axios.defaults.baseURL + '/upload'" :show-file-list="false"
          :on-success="afterUpload">
          <img v-if="model.url" :src="model.url" class="product" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ["id"],
    data() {
      return {
        // 服务器端数据
        model: {},
      };
    },
    created() {
      if (this.id) {
        this.fetchEdit();
      }
    },
    watch: {
      // 监听路由的地址 进行判断
      $route: (to, from) => {
        if (to.path == "/products/edit") {
          this.model = {};
        }
      },
    },
    methods: {
      // 上传图片之后的事件
      afterUpload(res) {
        // console.log(res);
        this.$set(this.model,
          "url", res.url);
        // this.model.icon = res.url;
      },
      async fetchEdit() {
        let res = await this.$axios.get("/products/edit/" + this.id);
        this.model = res.data;
      },

      async save() {
        if (this.id) {
          await this.$axios.post("/products/edit/" + this.id, this.model);
        } else {
          await this.$axios.post("/products/edit", this.model);
        }
        this.$message({
          message: "保存成功",
          type: "success",
        });
        this.$router.push("/products/list");
      },
      // 重置表单
      resetForm() {
        this.model = {};
      },
      // 图标上传
    },
  };
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .product {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>