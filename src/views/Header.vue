<template>
  <div>
    <input
      type="text"
      data-test="input"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script lang="ts">
// third party tools and libraries
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
// local functions and variables
// local components

@Component
export default class Header extends Vue {
  private inputValue: string = '';
  private addTodoItem() {
    if (!this.inputValue) {
      return;
    }
    this.$emit('add', this.inputValue);
    this.inputValue = '';
  }
}
</script>

<style lang="scss" scoped></style>
