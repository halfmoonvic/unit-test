import { shallowMount } from '@vue/test-utils';
import TodoList from '@/views/TodoList.vue';

describe('TodoList.vue', () => {
  it('组件渲染正常', () => {
    const wrapper = shallowMount(TodoList);
  });
});
