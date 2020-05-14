<template>
  <el-container style="height: 100vh;">
    <el-header>
      <el-row type="flex" align="middle">
        <el-col style="width: auto;">
          <header-menu :items="navs" />
        </el-col>
        <el-col style="width: auto;">
          <slot name="actions" />
        </el-col>
      </el-row>
    </el-header>

    <slot name="body" />
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import HeaderMenu from '~/components/HeaderMenu.vue'

@Component({
  components: {
    HeaderMenu
  }
})
export default class LayoutContainer extends Vue {
  @Prop(Array) readonly navs: [] | undefined
}
</script>

<style lang="scss">
  .el-header {
    position: relative;
    text-align: right;
    font-size: 12px;
    padding: 0;
  }

  .el-header::before {
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
