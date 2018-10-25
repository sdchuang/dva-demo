
import mockjs from 'mockjs'

const Random = mockjs.Random;

const data = mockjs.mock({
  'data|5':[{
    'id|+1':1,
    'name': () => {
      return Random.cname();
    }
  }]
})

export default {
  'GET /mockapi'(req,res){
    res.json({
      success: true,
      data: data,
    })
  },


}