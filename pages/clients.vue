<template>
  <layout-container :navs="navs">
    <template #actions>
      <el-button class="clients_button" size="mini" type="primary" @click="SET_DRAWER(true)">
        Add client
      </el-button>
    </template>
    <template #body>
      <el-main>
        <el-table v-loading="isLoading" :data="items">
          <el-table-column label="ID" prop="id" width="100" />
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Surname" prop="surname" />
          <el-table-column label="Phone" prop="phone" />
          <el-table-column label="Email" prop="email" />
          <el-table-column label="Operations">
            <template slot-scope="scope">
              <el-button size="mini" type="info" @click="editClient(scope.row)">
                Edit
              </el-button>
              <el-button size="mini" type="danger" @click="deleteClient(scope.row)">
                Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <clients-drawer />
    </template>
  </layout-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { clients } from '~/store/clients'
import HeaderMenu from '~/components/HeaderMenu.vue'
import ClientsDrawer from '~/components/ClientsDrawer.vue'

@Component({
  components: {
    HeaderMenu,
    ClientsDrawer
  }
})
export default class Clients extends Vue {
  @clients.State isLoading: any
  @clients.State items: any
  @clients.Mutation SET_CLIENT: any
  @clients.Mutation SET_DRAWER: any
  @clients.Action setItems: any
  @clients.Action delete: any

  navs = [
    {
      name: 'Clients',
      to: '/clients'
    }
  ]

  created () {
    return this.setItems()
  }

  editClient (client: any) {
    this.SET_CLIENT(client)
    this.SET_DRAWER(true)
  }

  deleteClient (client: any) {
    this.SET_CLIENT(client)

    this.$confirm(
      'This will permanently delete the client. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }
    ).then(async () => {
      await this.delete()
      this.$message({ type: 'success', message: 'User deleted' })
    }).catch(() => {})
  }
}
</script>

<style lang="scss">
  .el-button--primary {
    background: #22a898;
    border: 0;
  }

  .el-button--primary:focus,
  .el-button--primary:hover {
    background: #1f8175;
  }

  .el-button--danger {
    background: #f9a286;
    border: 0;
  }

  .el-button--danger:focus,
  .el-button--danger:hover {
    background: #f39070;
  }
</style>
