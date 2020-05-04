<template>
  <el-container>
    <el-aside class="aside" width="70px">
      <div class="aside__container">
        <div class="aside__logo">
          <img src="~assets/images/logo.svg" alt="">
        </div>

        <el-menu class="aside_menu" :router="true" :default-active="$route.path">
          <el-menu-item class="aside__item" index="/">
            <i class="el-icon-postcard" />
            <div class="name">
              Orders
            </div>
          </el-menu-item>
          <el-menu-item class="aside__item" index="/clients">
            <i class="el-icon-phone-outline" />
            <div class="name">
              Clients
            </div>
          </el-menu-item>
          <el-menu-item class="aside__item" index="/users">
            <i class="el-icon-user" />
            <div class="name">
              Users
            </div>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>

    <nuxt />

    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      direction="rtl"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.el-container {
  min-height: 100vh;
}
.el-menu-item {
  height: 70px;
  line-height: normal;
  text-align: center;
  padding: 0!important;
}
.el-menu-item [class^=el-icon-] {
  font-size: 26px;
  margin-top: 10px;
}
.name {
  margin-top: 5px;
}
.aside {
  background: #608E89;
}
.aside__container {
  position: fixed;
  width: inherit;
}
.aside__logo {
  height: 60px;
  background: #fff;
  text-align: center;
}
.aside__logo img {
  width: 50px;
  margin-top: 15px;
}
.aside__logo i {
  font-size: 34px;
  line-height: 58px;
  color: #17c8ff;
}
.aside_menu {
  background-color: inherit;
  border-right: 0;
}
.aside__item {
  color: #fff;
}
.aside__item i {
  color: #fff;
}
.aside__item:focus,
.aside__item:hover {
  background-color: #78b497;
}
.aside__item.is-active {
  background-color: #58a780;
  color: #fff;
}
.el-header {
  position: relative;
  text-align: right;
  font-size: 12px;
}
.el-header:before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 10px;
  left: 0;
  bottom: -10px;
  z-index: 1;
  box-shadow: inset 0 10px 12px -12px rgba(0, 0, 0, 0.3);
}
</style>
