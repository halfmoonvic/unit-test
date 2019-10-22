import { generateConfig, generateAnotherConfig } from '../src/snapshot.js';

test('测试 generateConfig 函数', () => {
  // .toMatchSnapshot() 生成快照
  expect(generateConfig()).toMatchSnapshot();
});

test('测试 generateAnotherConfig 函数', () => {
  // .toMatchSnapshot() 生成快照
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

test('测试 generateAnotherConfig 函数', () => {
  // .toMatchSnapshot() 生成快照
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
