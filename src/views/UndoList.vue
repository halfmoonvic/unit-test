<template>
  <div>
    <div data-test="count">{{ list.length }}</div>
    <ul>
      <li v-for="(item, index) in list" :key="item" data-test="item">
        {{ item }}
        <span data-test="delete-button" @click="handleDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// third party tools and libraries
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// local functions and variables
// local components

@Component
export default class UndoList extends Vue {
  @Prop(Array)
  private list!: string[];

  private handleDelete(index: number) {
    this.$emit('delete', index);
  }
}
</script>

<style lang="scss" scoped></style>
