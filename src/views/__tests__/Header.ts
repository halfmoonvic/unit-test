import { shallowMount } from '@vue/test-utils';
import Header from '@/views/Header.vue';

describe('Header.vue', () => {
  it('包含 input 框', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    expect(input.exists()).toBeTruthy();
  });

  it('input 框初始值为空', () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  });

  it('input 框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('dell lee');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('dell lee');
  });

  it('input 框 输入回车，无内容时，无反应', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted('add')).toBeFalsy();
  });

  it('input 框 输入回车，有内容时，向外触发事件,同时清空 inputValue', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('todo one');
    input.trigger('keyup.enter');
    expect(wrapper.emitted('add')).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
  });

  it('样式发生改变，做提示', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  });
});
