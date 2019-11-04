import { mount } from '@vue/test-utils';
import TodoList from '@/views/TodoList.vue';

it(`
   1. 用户会在header输入框输入内容
   2. 用户会点击回车按钮
   3. 列表项应该增加用户输入内容的列表项
  `, () => {
  const wrapper = mount(TodoList);
  const inputElm = wrapper.find('[data-test="header-input"]');
  const content = 'fjeaiofjeia';
  inputElm.setValue(content);
  inputElm.trigger('change');
  inputElm.trigger('keyup.enter');
  const listItems = wrapper.findAll('[data-test="list-item"]');
  expect(listItems.length).toBe(1);
  expect(listItems.at(0).text()).toContain(content);
});
