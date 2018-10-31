// import request from '../utils/request';
// import { stringify } from 'qs';

import util from '../utils/axios_conf'

export async function topic(data) {
  // console.log(data)
  return util.ajax.get(`/topics`, { params: data.payload });
}
export async function topicDetail(data) {
  return util.ajax.get(`/topic/${data.payload.id}`);
}
