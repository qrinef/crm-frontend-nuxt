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
import { clients } from '~/store/clients'
import HeaderMenu from '~/components/HeaderMenu.vue'

@Component({
  components: {
    HeaderMenu
  }
})
export default class Clients extends Vue {
  @clients.State isLoading: any
  @clients.State items: any
  @clients.Action setItems: any

  navs = [
    {
      name: 'Clients',
      to: '/clients'
    }
  ]

  created () {
    return this.setItems()
  }
}
</script>
