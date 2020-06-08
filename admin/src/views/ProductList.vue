<template>
  <div>
    <h1>商品列表</h1>
    <el-table :data="model" style="width: 100%" stripe>
      <el-table-column prop="_id" label="ID" width="300"></el-table-column>
      <el-table-column prop="title" label="分类名称"></el-table-column>
      <el-table-column prop="price" label="价格(￥)"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="$router.push(`/products/edit/${scope.row._id}`)">编辑
          </el-button>
          <el-button type="danger" size="small" @click="remove(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        model: []
      }
    },
    methods: {
      // 定义获取数据的函数
      async fetch() {
        let res = await this.$axios.get('/products/list');
        this.model = res.data;
        this.$notify({
          type: 'success',
          message: '欢迎进入商品列表',
          duration: 1000
        })
      },
      // 删除表格元素
      async remove(row) {
        this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$axios.delete(`/products/list/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      },
    },
    created() {
      this.fetch();
    },
  };
</script>

<style scoped>

</style>