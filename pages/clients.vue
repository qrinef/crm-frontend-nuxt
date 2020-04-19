<template>
  <el-main>
    <el-table :data="items">
      <el-table-column label="Name" prop="name" />
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
export default {
  name: 'Clients',
  data () {
    const generateData = (_) => {
      const data = []

      for (let i = 1; i <= 50; i++) {
        data.push({
          key: i,
          name: `Contact ${i}`,
          phone: `+19298383883${i}`,
          email: `email@example.com ${i}`
        })
      }
      return data
    }
    return {
      items: generateData()
    }
  }
}
</script>
