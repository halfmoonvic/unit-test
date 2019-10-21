import Counter from '../src/counter.js';

describe('Counter 测试', () => {
  let counter = null;
  console.log('descibe 1');

  beforeAll(() => {
    console.log('wrapper: before all');
  });

  beforeEach(() => {
    console.log('wrapper: before each');
    counter = new Counter();
  });

  afterEach(() => {
    console.log('wrapper: after each');
  });

  afterAll(() => {
    console.log('wrapper: last');
  });

  // describe 分组
  describe('测试增加相关的代码', () => {
    console.log('descibe 2');

    beforeEach(() => {
      console.log('inner one: before each');
      counter = new Counter();
    });
    afterEach(() => {
      console.log('inner one: after each');
    });

    test('测试 Counter 中的 addOne 方法', () => {
      // console.log('test case 1');
      counter.addOne();
      expect(counter.number).toBe(1);
    });

    test('测试 Counter 中的 addTwo 方法', () => {
      // console.log('test case 2');
      counter.addTwo();
      expect(counter.number).toBe(2);
    });
  });

  describe('减少相关的代码', () => {
    console.log('descibe 3');

    test('测试 Counter 中的 minusOne 方法', () => {
      // console.log('test case 2');
      counter.minusOne();
      expect(counter.number).toBe(-1);
    });

    test('测试 Counter 中的 minusTwo 方法', () => {
      // console.log('test case 4');
      counter.minusTwo();
      expect(counter.number).toBe(-2);
    });
  });
});
