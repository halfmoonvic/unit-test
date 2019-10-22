// import axios from 'axios';

export const fetchData = () => {
  return new Promise(resolve => {
    resolve('(function(){return "123"})()');
  });
  // return axios.get('/').then(res => res.data);
};
