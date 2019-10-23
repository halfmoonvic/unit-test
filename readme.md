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
3. `jest (babel-jest)` jest 检测是否安装了 babel
4. `babel-core` 是否安装了 babel-core
5. 获取 .babelrc 配置
6. 在 运行 测试之前，结合 babel，先把你的代码做一次转化
7. 运行转化过的 测试用例代码

### jest 一些命令

1. `jest --init` 初始化配置文件
2. `jest --coverage` 覆盖率
3. `jest --watchAll` 监视文件变化自动测试

### jest 匹配器 [Expect](https://jestjs.io/docs/zh-Hans/expect) && [Using Matchers](https://jestjs.io/docs/zh-Hans/using-matchers)

1. `expect(10).toBe(10);`
2. `expect(a).toEqual(b);` toEqual 递归检查对象或数组的每个字段。
3. `expect(null).toBeNull();` 只匹配 null
4. `expect(undefined).toBeUndefined();` 只匹配 undefined
5. `expect(a).toBeDefined();` toBeDefined 与 toBeUndefined 相反
6. `expect(1).toBeTruthy();` toBeTruthy 匹配任何 if 语句为真
7. `expect(0).toBeFalsy();` toBeFalsy 匹配任何 if 语句为假
8. `expect(a).not.toBeFalsy();`
9. `expect(10).toBeGreaterThan(9);`
10. `expect(10).toBeLessThan(11);`
11. `expect(10).toBeGreaterThanOrEqual(9);`
12. `expect(10).toBeLessThanOrEqual(11);`
13. `expect(0.1 + 0.2).toBeCloseTo(0.3);` 对于比较浮点数相等，使用 toBeCloseTo 而不是 toEqual，因为你不希望测试取决于一个小小的舍入误差。
14. `expect('abcdefg').toMatch(/ab/);` toMatch 正则表达式的字符串
15. toContain 来检查一个数组或可迭代对象是否包含某个特定项

```
const arr = ['dell', 'lee', 'imooc'];
const data = new Set(arr);
expect(data).toContain('dell');
```

16. 如果你想要测试的特定函数抛出一个错误，在它调用时，使用 toThrow

```
const throwNewError = () => {
  throw new Error('you are using the wrong JDK');
};
// You can also use the exact error message or a regexp
expect(throwNewError).toThrow(/JDK/)
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

### jest 中的勾子函数 [Setup and Teardown](https://jestjs.io/docs/zh-Hans/setup-teardown)

1. `beforeAll`
2. `beforeEach`
3. `afterEach`
4. `beforeAll`

### [describe 分组 作用域](https://jestjs.io/docs/zh-Hans/setup-teardown#作用域)

默认情况下，before 和 after 的块可以应用到文件中的每个测试。 此外可以通过 describe 块来将测试分组。 当 before 和 after 的块在 describe 块内部时，则其只适用于该 describe 块内的测试。  
执行顺序的时候，是先执行 describe，然后在执行各个勾子函数的。一些逻辑 就不要写在 describe 里面

### test.only

To run only one test with Jest, temporarily change that test command to a test.only

```
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```

### [Mock Functions](https://jestjs.io/docs/zh-Hans/mock-functions)

待实例理解用途

1. `jest.mock('../src/mock.js');`

### [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)

1. `toMatchSnapshot` 生成快照
2. `toMatchInlineSnapshot` 将生成的快照放置到 当前的 test case 中
3. 代码发生变化的时候，通过 控制台 按 `u` 来更新 快照
4. 多处 test case 更改的时候，按 `i` 来交互式的 更新快照
5. `expect.any(Date)` 值的类型为 Date 即可

### [Timer Mocks](https://jestjs.io/docs/zh-Hans/timer-mocks)

原生的定时器函数(如：setTimeout, setInterval, clearTimeout, clearInterval)并不是很方便测试，因为程序需要等待相应的延时

1. `jest.useFakeTimers();`
2. `jest.runAllTimers();` “快进”时间使得所有定时器回调被执行
3. `jest.runOnlyPendingTimers()` Run Pending Timers
4. `jest.advancertimersbytime(msToRun)` Advance Timers by Time

### [ES6 Class Mocks](https://jestjs.io/docs/zh-Hans/es6-class-mocks)

### dom 下的测试

jest 的测试 是在 node 下的。jest 在 node 环境下 自己模拟了一套 dom 的 api， jsDom

### TDD Test-driven development （测试驱动开发） 又（Red-Green Develeopment）

#### 1) 的开发流程

1. 编写测试用例
2. 运行测试
3. 测试用例无法通过测试
4. 优化代码，完成开发
5. 重复上述步骤

#### 2) TDD 的优势

1. 长期减少回归 bug
2. 代码质量更好（组织，可维护性）。先编写测试用例的时候，就会思考了组织逻辑结构的设计
3. 测试覆盖率高
4. 错误测试代码不容易出现。（如果是先写代码，在写测试，那么测试 可能写错的时候，代码通过了也没发现。反过来先写了 测试，在写代码，这种情况就会少很多了）
