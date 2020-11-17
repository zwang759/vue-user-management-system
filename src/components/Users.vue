<template>
  <b-container class="mt-4">
    <h1 class="page-header"> User Management System </h1>
    <SearchBar/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>Name</b-col>
        <b-col>Role</b-col>
        <b-col></b-col>
      </b-row>
      <div class="w-100"></div>
      <b-row v-for="item in userList" :key="item.id">
        <div class="w-100"></div>
        <UserListItem :item="item"/>
      </b-row>
    </b-container>

  </b-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UserListItem from "@/components/UserListItem";
import SearchBar from "@/components/UtilsBar";

export default {
  components: {
    UserListItem,
    SearchBar
  },
  computed: {
    ...mapGetters({userList: "getUserList"})
  },
  methods: {
    ...mapActions({setUserList: "setUserList"})
  },
  created() {
    this.setUserList();
  }
}
</script>

<style scoped>

</style>