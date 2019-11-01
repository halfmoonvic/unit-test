<template>
  <div class="undo-list">
    <div class="title">
      正在进行<span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list"
        :key="item"
        data-test="item"
      >
        {{ item }}
        <span
          class="delete"
          data-test="delete-button"
          @click="handleDelete(index)"
          >-</span
        >
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

<style lang="scss" scoped>
.undo-list {
  width: 600px;
  margin: 0 auto;
}

.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}

.count {
  margin-top: 5px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
}

.item {
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629a9a;
  text-indent: 10px;
}

.list {
  list-style-type: none;
}

.delete {
  margin-top: 5px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  text-indent: 0;
  cursor: pointer;
}
</style>
