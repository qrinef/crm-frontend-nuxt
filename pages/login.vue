<template>
  <el-container class="auth">
    <el-row type="flex" align="middle" class="auth__row">
      <el-col class="auth__form">
        <div class="auth__title">
          Log in
        </div>
        <el-form ref="login" :model="login" :rules="rules" label-position="top" hide-required-asterisk>
          <el-form-item class="auth_item" label="Email" prop="email">
            <el-input v-model="login.email" />
          </el-form-item>
          <el-form-item class="auth_item" label="Password" prop="password">
            <el-input v-model="login.password" show-password />
          </el-form-item>
          <el-form-item class="auth_item" :error="isError">
            <el-button class="auth_button" style="width: 100%" @click="setForm">
              Log in
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'login',
  data: () => ({
    login: {
      email: 'john',
      password: 'changeme'
    },
    error: {
      isActive: false,
      message: 'Invalid email or password'
    },
    rules: {
      email: [
        { required: true, message: 'Please enter email', trigger: 'blur' }
      ],
      password: [
        { required: true, message: 'Please enter password', trigger: 'blur' }
      ]
    }
  }),
  computed: {
    isError () {
      return this.error.isActive ? this.error.message : null
    }
  },
  methods: {
    setForm () {
      this.$refs.login.validate(async (valid) => {
        if (valid) {
          try {
            await this.$auth.loginWith('local', { data: this.login })
          } catch ({ response: { status } }) {
            if (status === 401) {
              this.error.isActive = true
            }
          }
        }
      })
    }
  }
}
</script>

<style>
  .auth {
    background: #EDEDED;
  }
  .auth__row {
    margin: 0 auto;
  }
  .auth__form {
    width: 420px;
    padding: 32px;
    background-color: #fff;
    border-radius: 5px;
  }
  .auth__title {
    text-align: center;
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    color: #3E3E3E;
  }
  .auth_item:last-child {
    margin-bottom: 0;
  }
  .auth_item label {
    line-height: normal;
  }
  .auth_item input:focus {
    border-color: #22A898
  }
  .auth_button {
    background: #22A898;
    color: #fff;
    font-weight: 600;
    border: 0;
  }
  .auth_button:focus,
  .auth_button:hover {
    background: #1F8175;
    color: #fff;
  }
</style>
