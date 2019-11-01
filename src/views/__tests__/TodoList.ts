import { shallowMount } from '@vue/test-utils';
import TodoList from '@/views/TodoList.vue';
import Header from '@/views/Header.vue';
import UndoList from '@/views/UndoList.vue';

describe('TodoList.vue', () => {
  it('初始化时， undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList.length).toBe(0);
  });

  it('监听到 Header的 add 事件时，会增加内容', () => {
    const wrapper = shallowMount(TodoList);
    // 这里使用了 Header 来触发事件，实际上已经是集成测试了，而不是单元测试了
    // const header = wrapper.find(Header);
    // header.vm.$emit('add', 'to do item 1');
    // const undoList = wrapper.vm.$data.undoList;
    // expect(undoList.length).toBe(1);
    // expect(undoList).toEqual(['to do item 1']);

    // const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3]
    });

    (wrapper.vm as any).addUndoItem(4);
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4]);
  });

  it('调用 UndoList 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.find(UndoList);
    const list = undoList.props('list');
    expect(list).toBeTruthy();
  });

  it('handleDeleteItem 方法被调用时, UndoList 列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3]
    });

    (wrapper.vm as any).handleDelete(1);
    expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
  });
});
