import { shallowMount } from '@vue/test-utils';
import TodoList from '@/views/TodoList.vue';
import Header from '@/views/Header.vue';

describe('TodoList.vue', () => {
  it('todolist 初始化时， undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList.length).toBe(0);
  });

  it('todolist 监听到 Header的 add 事件时，会增加内容', () => {
    const wrapper = shallowMount(TodoList);
    const header = wrapper.find(Header);
    header.vm.$emit('add', 'to do item 1');
    // (wrapper.vm as any).addUndoItem('to do item 1');
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList.length).toBe(1);
    expect(undoList).toEqual(['to do item 1']);
  });
});
