<template>
  <el-main>
    <el-table v-loading="isLoading" :data="items">
      <el-table-column label="ID" prop="id" width="100" />
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Surname" prop="surname" />
      <el-table-column label="Phone" prop="phone" />
      <el-table-column label="Email" prop="email" />
    </el-table>
  </el-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Users',
  computed: {
    ...mapState('users', ['isLoading', 'items'])
  },
  watch: {
    $route: 'setItems'
  },
  created () {
    this.setItems()
  },
  methods: {
    ...mapActions('users', ['setItems'])
  }
}
</script>
