<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        type="text"
        data-test="header-input"
        :value="inputValue"
        @input="onInput"
        @keyup.enter="addTodoItem"
        placeholder="TotoItem"
      />
    </div>
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
  // private inputValue: string = '';

  private get inputValue() {
    return this.$store.state.inputValue;
  }

  private onInput(e: any) {
    this.$store.commit('changeInputValue', e.target.value);
  }

  private addTodoItem() {
    if (!this.inputValue) {
      return;
    }
    this.$emit('add', this.inputValue);
    // this.inputValue = '';
    this.$store.commit('changeInputValue', '');
  }
}
</script>

<style lang="scss" scoped>
.header {
  line-height: 50px;
  background: #666;
}
.header-content {
  overflow: hidden;
  width: 600px;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
}
.header-input {
  float: right;
  width: 360px;
  margin-top: 12px;
  line-height: 24px;
  outline: none;
  color: #333;
  text-indent: 10px;
}
</style>
