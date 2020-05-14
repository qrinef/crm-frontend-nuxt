<template>
  <el-container>
    <layout-aside />

    <nuxt />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LayoutAside from '~/components/LayoutAside.vue'

@Component({
  components: {
    LayoutAside
  }
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss">
  .el-container {
    min-height: 100vh;
  }

  .el-main {
    background: #ededed;
  }
</style>
