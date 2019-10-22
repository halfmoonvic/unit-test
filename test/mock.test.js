// import axios from 'axios';
import { fetchData } from '../src/mock.js';
// __mocks__ 并没有 getNumber。 jest.mock 会将 src/mock.js 的所有 函数都给 mock 了。
const { getNumber } = jest.requireActual('../src/mock.js');

// jest.config.js 下 打开 automock 可 替换下面这一行
jest.mock('../src/mock.js');

// jest.unmock('../src/mock.js');
// jest.mock('axios');

// test('fetchData', () => {
//   axios.get.mockResolvedValue({
//     data: '(function(){return "123"})()'
//   });
//   return fetchData().then(data => {
//     expect(eval(data)).toEqual('123');
//   });
// });

test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123');
  });
});

test('getNumber', () => {
  expect(getNumber()).toEqual(123);
});
