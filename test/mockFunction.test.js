import { runCallback, getData } from './../src/mockFunction.js';
import axios from 'axios';
jest.mock('axios');

test.only('test runCallback', () => {
  const func = jest.fn();
  func.mockReturnValueOnce('1111');
  func.mockReturnValueOnce('222');
  runCallback(func);
  runCallback(func);
  runCallback(func);

  expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(3);
  expect(func.mock.calls[0]).toEqual(['abc']);
  console.log(func.mock);
});

test('测试 getData', async () => {
  axios.get.mockResolvedValueOnce({ data: 'hello' });
  axios.get.mockResolvedValueOnce({ data: 'world' });

  await getData().then(res => {
    expect(res).toBe('hello');
  });

  await getData().then(res => {
    expect(res).toBe('world');
  });
});
