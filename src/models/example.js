
import { topic, mockData } from '../services/exam'

export default {

  namespace: 'count',

  state: {
    cur:0,
    topicList:[]
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
      yield put({type:'exam',payload:res})
    },
    *mockTest({payload},{put,call}){
      console.log('mock effect')
      yield call(mockData)
    }
  },

  reducers: {
    add(state){
      const newCur = state.cur + 1;
      return {
        ...state,
        cur:newCur
      }
    },
    exam(state,{payload}){
      console.log(payload)
      const newTopic = payload.data.data;
      console.log(newTopic)
      return {
        ...state,
        topicList:newTopic
      }
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
