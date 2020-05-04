<template>
  <el-container style="height: 100vh;">
    <el-header>
      <slot name="menu" />
    </el-header>

    <slot name="body" />
  </el-container>
</template>

<script>
export default {
  name: 'LayoutContainer'
}
</script>
