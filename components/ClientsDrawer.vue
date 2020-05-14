<template>
  <el-drawer
    :title="operationType ? 'Add client' : 'Edit client'"
    :visible.sync="isDrawer"
    size="400px"
    direction="rtl"
    custom-class="drawer"
  >
    <el-form ref="client" :model="client" :rules="rules" class="drawer__form" label-position="top">
      <el-form-item label="Name" prop="name">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="Surname" prop="surname">
        <el-input v-model="surname" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="email" />
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="phone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="drawer__button" @click="setForm">
          Save
        </el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State2Way } from 'vuex-class-state2way'
import { clients } from '~/store/clients'

@Component
export default class Clients extends Vue {
  @clients.State client: any
  @clients.Action create: any
  @clients.Action update: any
  @clients.Getter operationType: any
  @clients.State('isDrawer') GET_DRAWER: any
  @clients.Mutation SET_DRAWER: any

  @State2Way('clients/SET_NAME', 'clients.client.name') name: any
  @State2Way('clients/SET_SURNAME', 'clients.client.surname') surname: any
  @State2Way('clients/SET_PHONE', 'clients.client.phone') phone: any
  @State2Way('clients/SET_EMAIL', 'clients.client.email') email: any

  get isDrawer () {
    return this.GET_DRAWER
  }

  set isDrawer (value) {
    this.SET_DRAWER(value);
    (this.$refs.client as any).resetFields()
  }

  rules = {
    name: [
      { required: true, message: 'Please enter name', trigger: 'blur' }
    ],
    surname: [
      { message: 'Please enter surname', trigger: 'blur' }
    ],
    phone: [
      { message: 'Please enter phone', trigger: 'blur' }
    ],
    email: [
      { type: 'email', required: true, message: 'Please enter email', trigger: 'blur' }
    ]
  }

  setForm () {
    (this.$refs.client as any).validate(async (valid: boolean) => {
      if (valid) {
        let message

        if (this.operationType) {
          message = 'User created'
          await this.create()
        } else {
          message = 'User updated'
          await this.update()
        }

        this.$message({ type: 'success', message })
      }
    })
  }
}
</script>

<style>
  .drawer:focus,
  .drawer *:focus {
    outline: none;
  }

  .drawer__form {
    margin: 20px;
  }

  .drawer__button {
    width: 100%;
  }
</style>
