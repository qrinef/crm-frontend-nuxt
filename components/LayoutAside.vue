<template>
  <el-aside class="aside" width="70px">
    <div class="aside__container">
      <div class="aside__logo">
        <img src="~assets/images/logo.svg" alt="logo">
      </div>

      <el-menu :router="true" :default-active="$route.path">
        <el-menu-item v-for="(item, key) in menu" :key="key" :index="item.index">
          <i :class="`el-icon-${item.icon}`" />
          <div class="name">
            {{ item.name }}
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LayoutAside extends Vue {
  menu = [
    {
      index: '/',
      name: 'Orders',
      icon: 'postcard'
    },
    {
      index: '/clients',
      name: 'Clients',
      icon: 'phone-outline'
    },
    {
      index: '/users',
      name: 'Users',
      icon: 'user'
    }
  ]
}
</script>

<style lang="scss">
  .aside {
    background: #608e89;

    &__container {
      position: fixed;
      width: inherit;
    }

    &__logo {
      height: 60px;
      background: #fff;
      text-align: center;

      img {
        width: 50px;
        margin-top: 15px;
      }
    }

    .el-menu {
      background-color: inherit;
      border-right: 0;
    }

    .el-menu-item {
      height: 70px;
      color: #fff;
      line-height: normal;
      text-align: center;
      padding: 0 !important;
    }

    .el-menu-item i {
      color: #fff;
      font-size: 26px;
      margin-top: 10px;
    }

    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: #78b497;
    }

    .el-menu-item.is-active {
      background-color: #58a780;
      color: #fff;
    }

    .el-menu-item .name {
      margin-top: 5px;
    }
  }
</style>
