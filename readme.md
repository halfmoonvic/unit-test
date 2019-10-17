### 测试原理
```
const { add } = require('../src/math');

function test(description, fn) {
  try {
    fn();
  } catch (e) {
    console.error(`failed: ${description}. at ${e}`);
  }
}

function expect(received) {
  return {
    toBe: expected => {
      if (received !== expected) {
        throw new Error(`expected ${expected} and received ${received}`);
      }
    }
  };
}

test('should return 5 when 2 + 3', () => {
  expect(add(2, 3)).toBe(5);
});
```

### babel-jest
1. babel 的运行环境 为 node，不支持 commonjs 的语法引入，可以使用 babel 将代码进行转换后在进行测试
2. `npm run jest`
3. `jest (babel-jest)` jest检测是否安装了 babel
4. `babel-core` 是否安装了 babel-core
5. 去 .babelrc 配置
6. 在 运行 测试之前，结合 babel，先把你的代码做一次转化
7. 运行转化过的 测试用例代码

### jest 一些命令
1. `jest --init` 初始化配置文件
2. `jest --coverage` 覆盖率
3. `jest --watchAll` 监视文件变化自动测试

### jest 匹配器
1. expect(10).toBe(10);
2. expect(a).toEqual(b); 
3. expect(null).toBeNull(); 
4. expect(undefined).toBeUndefined(); 
5. expect(a).toBeDefined(); 
6. expect(1).toBeTruthy(); 
7. expect(0).toBeFalsy(); 
8. expect(a).not.toBeFalsy(); 
9. expect(10).toBeGreaterThan(9); 
10. expect(10).toBeLessThan(11); 
11. expect(10).toBeGreaterThanOrEqual(9); 
12. expect(10).toBeLessThanOrEqual(11); 
13. expect(0.1 + 0.2).toBeCloseTo(0.3); 
14. expect('abcdefg').toMatch(/ab/);
15. 
  ```
  const arr = ['dell', 'lee', 'imooc'];
  const data = new Set(arr);
  expect(data).toContain('dell');
  ```
16. 
  ```
  const throwNewError = () => {
    throw new Error('error');
  };
  expect(throwNewError).toThrow(/error/)
  ```

### `jest --watchAll` 下的几种命令模式
1. `a` 模式 测试 所有的 tests
2. `f` 模式 测试 之前测试失败的 tests
3. `o` 模式 测试 当前文件更改过的 测试文件里面的 tests。 可以直接写成`jest --watch`（需要有 git 记录文件变化）
4. `t` 模式 根据测试用例的名字，只测试 过滤后的 测试
5. `p` 模式 根据测试文件的名字，只测试 过滤后的 测试文件当中的 测试

### jest [异步测试](https://jestjs.io/docs/zh-Hans/asynchronous)
1. 使用 async await 时，与平常使用 无差别，在测试前 await 就好，不过 测试 错误的时候，需要 `expect.assertions(1)`
2. 使用 promise 的 .then .catch 语法的时候，与 上面差不多，错误情况下需要 `expect.assertions(1)`。 注意 在 `test` 测试用例当中 需要 `return` 这个 `promise`
3. 使用 jest 提供的 `resolves rejects` 的接口，在判断错误的情况下不需要 `expect.assertions(1)`。但 仍需返回这个 `promise`


