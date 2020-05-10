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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { users } from '~/store/users'
import HeaderMenu from '~/components/HeaderMenu.vue'

  @Component({
    components: {
      HeaderMenu
    }
  })
export default class Users extends Vue {
    @users.State isLoading: any
    @users.State items: any
    @users.Action setItems: any

    navs = [
      {
        name: 'Users',
        to: '/users'
      }
    ]

    created () {
      return this.setItems()
    }
}
</script>
