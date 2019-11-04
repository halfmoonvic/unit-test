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
});
