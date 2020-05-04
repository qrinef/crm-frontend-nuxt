<template>
  <layout-container>
    <template #menu>
      <header-menu :items="navs" />
    </template>
    <template #body>
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
  </layout-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'Clients',
  components: {
    HeaderMenu
  },
  data: () => ({
    navs: [
      {
        name: 'Clients',
        to: '/clients'
      }
    ]
  }),
  computed: {
    ...mapState('clients', ['isLoading', 'items'])
  },
  watch: {
    $route: 'setItems'
  },
  created () {
    this.setItems()
  },
  methods: {
    ...mapActions('clients', ['setItems'])
  }
}
</script>
