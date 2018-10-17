import request from '../utils/request';
import { stringify } from 'qs';

export async function topic(data) {
  console.log(data)
  return request(`/apitest/topics?${stringify(data.payload)}`,{method:'GET'});
}