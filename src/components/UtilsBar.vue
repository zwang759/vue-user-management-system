<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-button @click="modalShow = !modalShow" size="sm">Add a new user</b-button>

    <b-modal v-model="modalShow" title="Add a new user" hide-footer hide-backdrop>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Id:" label-for="input-1">
          <b-form-input
              id="input-1"
              v-model="form.id"
              required
              placeholder="Enter id"
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Role:" label-for="input-3">
          <b-form-input
              id="input-3"
              v-model="form.role"
              required
              placeholder="Enter role"
          />
        </b-form-group>

        <b-form-group id="input-group-4" label="Location:" label-for="input-4">
          <b-form-input
              id="input-4"
              v-model="form.location"
              required
              placeholder="Enter location"
          />
        </b-form-group>

        <b-form-group id="input-group-5" label="Hobbies:" label-for="input-5">
          <b-form-input
              id="input-5"
              v-model="form.hobbies"
              required
              placeholder="Enter hobbies (separated by comma [,])"
          />
        </b-form-group>

        <b-row align-h="between">
          <b-col cols="auto"><b-button type="submit" variant="primary">Submit</b-button></b-col>
          <b-col cols="auto"><b-button type="reset" variant="danger">Reset</b-button></b-col>
        </b-row>

      </b-form>

    </b-modal>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto" align="center">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-form-select :value="filteredRole" @change="onSelectFilter" :options="roleList"/>

      <b-form-select :value="sortBy" @change="onSelectSort" :options="sortCriteria"/>

    </b-navbar-nav>

  </b-navbar>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {NAME_ASC, NAME_DESC} from "@/vuex/enum";

export default {
  data() {
    return {
      form: {
        id: "",
        name: "",
        role: "",
        location: "",
        hobbies: ""
      },
      show: true,
      modalShow: false,
      sortCriteria: [NAME_ASC, NAME_DESC],
      ...mapState(["userList", "filteredRole", "sortBy"])
    }
  },
  methods: {
    ...mapActions({addUser: "addUser", setSortBy: "setSortBy", setFilteredRole: "setFilteredRole"}),
    onSelectSort(sortBy) {
      this.setSortBy(sortBy);
    },
    onSelectFilter(role) {
      this.setFilteredRole(role);
    },
    onSubmit(event) {
      event.preventDefault();
      this.addUser(this.form);
      this.modalShow = false;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.id = "";
      this.form.name = "";
      this.form.role = "";
      this.form.location = "";
      this.form.hobbies = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      })
    }
  },
  computed: {
    ...mapGetters({roleList: "getRoleList"})
  },
}
</script>

<style scoped>

</style>