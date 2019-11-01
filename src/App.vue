<template>
  <div id="app">
    <todo-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
import TodoList from './views/TodoList.vue';

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #cdcdcd;
}
</style>
