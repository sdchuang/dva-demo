
import { topic, topicDetail } from '../services/topic'

export default {

  namespace: 'topic',

  state: {
    topicList:[],
    topicDetail:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *topicData({payload},{put,call}){
      const res = yield call(topic,{payload})
      yield put({type:'getTopicData',payload:res})
    },
    *topicDetail({payload},{put,call}){
      const res = yield call(topicDetail,{payload})
      yield put({type:'getTopicDetail',payload:res})
    },
  },

  reducers: {
    getTopicData(state,{payload}){
      // console.log('999',payload)
      return {
        ...state,
        topicList:payload
      }
    },
    getTopicDetail(state,{payload}){
      return {
        ...state,
        topicDetail:payload
      }
    },
    clear(){
      return{
        topicList:[],
        topicDetail:{}
      }
    },
    save(state, action) {
      // console.log('lala',action.payload)
      return { ...state, ...action.payload };
    },
  },

};
