
import mockjs from 'mockjs'

const Random = mockjs.Random;

const mockData = mockjs.mock({
  'data|5':[{
    'id|+1':1,
    'name': () => {
      return Random.cname();
    }
  }]
})

const topicList = mockjs.mock({
  'data|3':[{
    'id|+1':1,
    'title': () => {
      return Random.cname();
    }
  }]
})

export default {
  'GET /mockapi'(req,res){
    res.json({
      success: true,
      data: mockData,
    })
  },

  '/api/topics'(req,res){
    res.json({
      success: true,
      data: topicList.data,
    })
  },


}