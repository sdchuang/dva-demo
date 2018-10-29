// import request from '../utils/request';
import { stringify } from 'qs';

import util from '../utils/axios_conf'

export async function topic(data) {
  console.log(data)
  return util.ajax.get(`/topics?${stringify(data.payload)}`);
}

export async function mockData(data) {
//   // console.log(data)
//   // return request(`/${baseUrl}/mockapi`,{method:'GET'});
}