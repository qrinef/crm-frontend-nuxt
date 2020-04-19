<template>
  <div>
    profile
    <br>
    <button @click="logout">
      logout
    </button>
    <br>
    <nuxt-link to="/profile">
      Go profile
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      try {
        // const response = await this.$auth.logout()
        // console.log(response)
      } catch (err) {
        // console.log(err)
      }
    }
  }
}
</script>
