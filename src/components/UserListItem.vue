<template>
  <b-container class="bv-example-row">

    <div class="mb-3">
      <b-row align-v="center">
        <b-col>{{ item.name }}</b-col>
        <b-col>{{ item.role }}</b-col>
        <b-col>
          <b-button v-b-toggle="item.id" @click="onClick">Show details</b-button>
        </b-col>
      </b-row>
    </div>

    <UserDetail :item="item"/>

  </b-container>
</template>

<script>
import UserDetail from "@/components/UserDetail";
import {mapActions} from "vuex";
export default {
  components: {UserDetail},
  props: {
    item: Object,
  },
  methods: {
    ...mapActions({updateUser: "updateUser"}),
    onClick() {
      this.updateUser(this.item);
    }
  }
}
</script>

<style scoped>

</style>