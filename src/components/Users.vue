<template>
  <div class="users container">
    <h1 class="page-header"> User Management System</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th> </th>
        <th> </th>
        <th> </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users">
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "users",
  data () {
    return {
      users: []
    }
  }
}
</script>

<style scoped>

</style>