test('jest 匹配器', () => {
  // toBe 匹配器 matchers
  const a = { one: 1 };
  const b = { one: 1 };
  expect(10).toBe(10);
  expect(a).toEqual(b);
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(a).toBeDefined();
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
  expect(a).not.toBeFalsy();

  expect(10).toBeGreaterThan(9);
  expect(10).toBeLessThan(11);
  expect(10).toBeGreaterThanOrEqual(9);
  expect(10).toBeLessThanOrEqual(11);

  // expect(0.1 + 0.2).toEqual(0.3); // js 浮点数计算精度问题，使用 toBeCloseTo
  expect(0.1 + 0.2).toBeCloseTo(0.3);

  expect('abcdefg').toMatch(/ab/);

  // test('toContain', () => {
  const arr = ['dell', 'lee', 'imooc'];
  const data = new Set(arr);
  expect(data).toContain('dell');
  // });

  const throwNewError = () => {
    throw new Error('error');
  };
  expect(throwNewError).toThrow(/error/);
});
