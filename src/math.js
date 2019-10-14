// module.exports = {
//   add: (...args) => {
//     return args.reduce((a, b) => a + b);
//   },

//   mul: (...args) => {
//     return args.reduce((a, b) => a * b);
//   }
// };

export function add(...args) {
  return args.reduce((a, b) => a + b);
}

export function mul(...args) {
  return args.reduce((a, b) => a * b);
}
