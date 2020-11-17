<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-navbar-brand href="#">User Management System</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>