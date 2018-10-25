import request from '../utils/request';
import { stringify } from 'qs';

export async function topic(data) {
  // console.log(data)
  return request(`/api/topics?${stringify(data.payload)}`,{method:'GET'});
}

export async function mockData(data) {
  // console.log(data)
  return request('/mockapi',{method:'GET'});
}