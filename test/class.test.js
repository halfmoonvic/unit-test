import { demoFunction } from '../src/class.js';
import Util from '../src/util.js';
// jest.mock 发现 util是一个类，会自动把类的构造函数和方法编程 jest.fn()
jest.mock('./../src/util.js', () => {
  // 下面这些 可以 单独 写到 __mocks__ 下面去
  const Util = jest.fn(() => {
    console.log('constructor');
  });
  Util.prototype.a = jest.fn(() => {
    console.log('aa');
  });
  Util.prototype.b = jest.fn(() => {
    console.log('b');
  });
  return Util;
});
// jest.mock('./../src/util.js') 可以理解为 const Util = jest.fn()
// Util.a = jest.fn()
// Util.b = jest.fn()

// let util = null;

// beforeAll(() => {
//   util = new Util();
// });

test('测试 demoFunction 方法', () => {
  // expect(util.a(1, 2)).toBe('12');
  demoFunction();
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
