import axios from 'axios';

export function runCallback(cb) {
  cb('abc');
}

export function createObject(classItem) {
  new classItem();
}

export function getData() {
  return axios.get('/api').then(res => res.data);
}
