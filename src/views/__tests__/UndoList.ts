import { shallowMount } from '@vue/test-utils';
import UndoList from '@/views/UndoList.vue';

describe('UndoList.vue', () => {
  it('参数为 [1, 2, 3]， count 值为0，且列表无内容，且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'div',
            value: 2
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });
    const countElem = wrapper.findAll('[data-test="count"]');
    const listItems = wrapper.findAll('[data-test="item"]');
    const deleteBtns = wrapper.findAll('[data-test="delete-button"]');
    expect(countElem.at(0).text()).toBe('3');
    expect(listItems.length).toEqual(3);
    expect(deleteBtns.length).toBe(3);
  });

  it('删除按钮 被点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'div',
            value: 2
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });
    const deleteBtns = wrapper.findAll('[data-test="delete-button"]').at(1);
    deleteBtns.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  });

  it('列表项被点击，向外触发 status 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'div',
            value: 2
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });
    const deleteBtns = wrapper.findAll('[data-test="item"]').at(1);
    deleteBtns.trigger('click');
    expect(wrapper.emitted().changeStatus).toBeTruthy();
    expect(wrapper.emitted().changeStatus[0][0]).toBe(1);
  });

  it('列表项显示一个输入框, 两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'input',
            value: 2
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });

    const input = wrapper.findAll('[data-test="input"]');
    expect(input.length).toBe(1);
  });

  it('输入框失去焦点时，向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'input',
            value: 2
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });

    const inputElm = wrapper.findAll('[data-test="input"]');
    inputElm.trigger('blur');

    expect(wrapper.emitted().reset).toBeTruthy();
  });

  it('输入框发生变化时，向外触发 change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div',
            value: 1
          },
          {
            status: 'input',
            value: 123
          },
          {
            status: 'div',
            value: 3
          }
        ]
      }
    });

    const inputElm = wrapper.findAll('[data-test="input"]');
    inputElm.trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: '123',
      index: 1
    });
  });
});
