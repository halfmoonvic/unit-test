import { fetchData, fetchData1, fetchDataError } from './../src/fetchData.js';

// 回调类型异步函数测试
// 1. 利用 done, Jest会等done回调函数执行结束后，结束测试
test('利用 done: fetchData 返回结果为 {success: true}', done => {
  fetchData(data => {
    expect(data).toEqual({ success: true });
    done(); // 异步函数执行完成
  });
});

// If your code uses promises, there is a more straightforward way to handle asynchronous tests.
// Return a promise from your test, and Jest will wait for that promise to resolve
test('返回 promise: 异步测试', () => {
  return fetchData1().then(res => {
    expect(res.data).toEqual({ success: true });
  });
});
// 利用 resolves rejects，不需要使用 expect.assertions(1)
test('resolve', () => {
  return expect(fetchData1()).resolves.toMatchObject({
    data: { success: true }
  });
});
// 使用 async await 同上面一个道理
test('使用 async await: fetchData1 返回结果为 {success: true}', async () => {
  const res = await fetchData1();
  expect(res.data).toEqual({ success: true });
});

// 测试失败情况
// 如果你想要 Promise 被拒绝，使用 .catch 方法。 请确保添加 expect.assertions 来验证一定数量的断言被调用。 否则一个fulfilled态的 Promise 不会让测试失败︰
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataError().catch(e =>
    expect(e.toString().indexOf('404') > -1).toBe(true)
  );
});
test('使用reject', () => {
  return expect(fetchDataError()).rejects.toThrow();
});
test('async, await 同上: the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataError();
  } catch (e) {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  }
});
