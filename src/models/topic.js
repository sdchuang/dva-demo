
import { topic } from '../services/exam'

export default {

  namespace: 'topic',

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
      // yield put({ type: 'save', payload:res });
    },
  },

  reducers: {
    exam(state,{payload}){
      const newTopic = payload;
      // console.log('999',payload)
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
