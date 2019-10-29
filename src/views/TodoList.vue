<template>
  <div>
    <v-header @add="addUndoItem" />
    <ul>
      <li v-for="item in undoList" :key="item">{{ item }}</li>
    </ul>
    <undo-list :list="undoList" @delete="handleDelete" />
  </div>
</template>

<script lang="ts">
// third party tools and libraries
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
// local functions and variables
// local components
import Header from './Header.vue';
import UndoList from './UndoList.vue';

@Component({
  components: {
    VHeader: Header,
    UndoList
  }
})
export default class TodoList extends Vue {
  private undoList: string[] = [];

  private addUndoItem(item: string) {
    this.undoList.push(item);
  }

  private handleDelete(index: number) {
    this.undoList.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped></style>
