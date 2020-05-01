<template>
  <el-main>
    <el-table v-loading="isLoading" v-infinite-scroll="setItems" :data="items">
      <el-table-column label="ID" prop="id" width="100" />
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Surname" prop="surname" />
      <el-table-column label="Phone" prop="phone" />
      <el-table-column label="Email" prop="email" />
    </el-table>
  </el-main>
</template>

<style>
  .el-main {
    background: #f3f3f3;
  }
</style>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Users',
  computed: {
    ...mapState('users', ['isLoading', 'items'])
  },
  watch: {
    $route: 'resetState'
  },
  created () {
    this.resetState()
  },
  methods: {
    ...mapActions('users', ['setItems']),
    ...mapMutations('users', ['resetState'])
  }
}
</script>
