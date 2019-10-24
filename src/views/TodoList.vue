<template>
  <div>
    <v-header />
  </div>
</template>

<script lang="ts">
// third party tools and libraries
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
// local functions and variables
// local components
import Header from './Header.vue';

@Component({
  components: {
    VHeader: Header
  }
})
export default class TodoList extends Vue {}
</script>

<style lang="scss" scoped></style>
