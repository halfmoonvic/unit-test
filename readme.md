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

