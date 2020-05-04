<template>
  <el-menu class="menu" mode="horizontal" :router="true" :default-active="$route.path">
    <el-menu-item v-for="(item, index) in items" :key="index" class="menu__item" :index="item.to">
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .menu {
  }
  .menu__item {
    color: #545454!important;
    font-size: 18px;
  }
  .menu__item.is-active {
    border-bottom: 0!important;
  }
</style>
