<template>
  <div id="app">
    <AppBar/>
    <Users/>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import Users from "@/components/Users";

export default {
  name: 'App',
  components: {
    AppBar,
    Users
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 500px;
}
</style>
