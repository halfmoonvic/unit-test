<template>
  <div>
    <v-header @add="addUndoItem" />
    <undo-list
      :list="undoList"
      @changeStatus="handleStatusChanged"
      @delete="handleDelete"
      @reset="resetStatus"
      @change="changeItemValue"
    />
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

interface Task {
  status: string;
  value: string;
}

@Component({
  components: {
    VHeader: Header,
    UndoList
  }
})
export default class TodoList extends Vue {
  private undoList: Task[] = [];

  private addUndoItem(inputValue: string) {
    this.undoList.push({
      status: 'div',
      value: inputValue
    });
  }

  private handleDelete(index: number) {
    this.undoList.splice(index, 1);
  }

  private handleStatusChanged(index: number) {
    this.undoList[index].status = 'input';
  }

  private resetStatus() {
    this.undoList.forEach((item: Task) => {
      item.status = 'div';
    });
  }

  private changeItemValue(model: any) {
    const { value, index } = model;
    this.undoList[index].value = value;
  }
}
</script>

<style lang="scss" scoped></style>
