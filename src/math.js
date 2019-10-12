module.exports = {
  add: (...args) => {
    return args.reduce((a, b) => a + b);
  },

  mul: (...args) => {
    return args.reduce((a, b) => a * b);
  }
};
