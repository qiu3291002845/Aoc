<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="250px">
      <img src="../plugins/logo/bird.png" alt="" width="150" height="65" style="margin:10px 45px 0px" />
      <el-menu router unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-home"></i>页面管理</template>
          <el-menu-item-group>
            <template slot="title">首页</template>
            <el-menu-item index="/products/edit">新建商品</el-menu-item>
            <el-menu-item index="/products/list">商品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="详情页">
            <el-menu-item index="1-3">新建规格</el-menu-item>
            <el-menu-item index="1-4">详情列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user-solid"></i>用户管理</template>
          <el-menu-item-group>
            <template slot="title">用户</template>
            <el-menu-item index="1-1">创建用户</el-menu-item>
            <el-menu-item index="1-2">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; height:75px; font-size: 12px">
        <el-row :gutter="12">
          <el-col :span="2" :offset="15">
            <div>
              <el-button type="text" @click="" icon="el-icon-s-home"><span>首页</span></el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <el-button type="text" @click="" icon="el-icon-question"><span>帮助</span></el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <el-button type="text" @click="" icon="el-icon-s-comment"><span>反馈</span></el-button>
            </div>
          </el-col>
          <el-col :span="3">
            <div style="position: relative;">
              <div class="avatar">
                <img src="../plugins/avatar/IMG_20200519_232440.jpg" width="40" height="40" alt="" />
              </div>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="cursor: pointer;">
                  管理员<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-s-order">个人资料</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-s-promotion">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
  .el-header {
    background-color: #eee;
    color: rgb(51, 51, 51);
    line-height: 75px;
    font-size: 24px;
  }

  .el-header .el-button {
    font-size: 16px;
    color: #333;
  }

  .avatar {
    position: absolute;
    top: 15px;
    right: 70px;
    display: inline-block;
  }

  .avatar img {
    border-radius: 5px;
  }

  .el-aside {
    color: #333;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 0 0;
    background-color: #f9fafc;
  }
</style>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>