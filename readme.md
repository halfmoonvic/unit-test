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

### jest 一些命令
1. `jest --init` 初始化配置文件
2. `jest --coverage` 覆盖率
3. `jest --watchAll` 监视文件变化自动测试

### babel-jest
1. babel 的运行环境 为 node，不支持 commonjs 的语法引入，可以使用 babel 将代码进行转换后在进行测试
2. `npm run jest`
3. `jest (babel-jest)` jest检测是否安装了 babel
4. `babel-core` 是否安装了 babel-core
5. 去 .babelrc 配置
6. 在 运行 测试之前，结合 babel，先把你的代码做一次转化
7. 运行转化过的 测试用例代码
