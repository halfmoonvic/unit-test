import store from '../index.ts';

it('当 store 接受 changeInputValue 的 commit时，inputValue 发生变化', () => {
  const value = '1j23io';
  store.commit('changeInputValue', value);
  expect(store.state.inputValue).toBe(value);
});
