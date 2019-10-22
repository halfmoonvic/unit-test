import addDivToBody from './../src/dom.js';
import $ from 'jquery';

test('addDivToBody 测试', () => {
  addDivToBody();
  addDivToBody();

  expect($('body').find('div').length).toBe(2);
});

// node 不具备 dom
// jest 在 node 环境下 自己模拟了一套 dom 的 api， jsDom
