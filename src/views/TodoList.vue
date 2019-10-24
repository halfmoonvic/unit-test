<template>
  <div>
    <v-header @add="addUndoItem" />
    <ul>
      <li v-for="item in undoList" :key="item">{{ item }}</li>
    </ul>
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
export default class TodoList extends Vue {
  private undoList: string[] = [];

  private addUndoItem(item: string) {
    this.undoList.push(item);
  }
}
</script>

<style lang="scss" scoped></style>
