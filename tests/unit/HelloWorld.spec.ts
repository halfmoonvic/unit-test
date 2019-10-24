import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

describe('HelloWorld.vue', () => {
  it('通过手写 html 等来测试', () => {
    const root = document.createElement('div');
    root.className = 'root';
    document.body.appendChild(root);
    new Vue({
      render: h =>
        h(HelloWorld, {
          props: {
            msg: 'msg'
          }
        })
    }).$mount('.root');
    expect(document.getElementsByClassName('hello').length).toBe(1);
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message abc';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
    expect(wrapper).toMatchSnapshot();
  });
});
