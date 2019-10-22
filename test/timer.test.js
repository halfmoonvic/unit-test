import timer from '../src/timer.js';

jest.useFakeTimers();

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // 运行所有的 timers
  // jest.runAllTimers();
  // 仅运行 队列当中的 timers
  // jest.runOnlyPendingTimers();
  // 让时间 快进 3000 毫秒
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
