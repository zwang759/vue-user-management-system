<template>
  <b-collapse :id="item.id">
    <b-card title="User details">
      <b-card-text> Id: {{ item.id }}</b-card-text>
      <b-card-text> Name: {{ item.name }}</b-card-text>
      <b-card-text> Role: {{ item.role }}</b-card-text>
      <b-card-text> Location: {{ item.location }}</b-card-text>
      <b-card-text> Hobbies: {{ item.hobbies.join(", ") }}</b-card-text>
      <b-card-text v-if="item.selectionCount !== undefined"> Total number of selections: {{ item.selectionCount }}</b-card-text>
      <b-card-text v-if="item.firstSelectedTime !== undefined"> First time selected: {{ getTimeFormat(item.firstSelectedTime) }}</b-card-text>
      <b-card-text v-if="item.lastSelectedTime !== undefined"> Last time selected: {{ getTimeFormat(item.lastSelectedTime) }}</b-card-text>
    </b-card>
    <p></p>
  </b-collapse>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    item: Object,
  },
  methods: {
    getTimeFormat(timestamp) {
      return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>

<style scoped>

</style>