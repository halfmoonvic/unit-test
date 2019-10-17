import axios from 'axios';

export const fetchData = async fn => {
  const res = await axios.get('http://www.dell-lee.com/react/api/demo.json');
  fn(res.data);
};

export const fetchData1 = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
};

export const fetchDataError = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo2.json');
};
