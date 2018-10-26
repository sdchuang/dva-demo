
export const config = {
  //环境变量配置
  env() {
    const mock = false;
    // 生产环境
    // if (true) {
    if (process.env.NODE_ENV === "production") {
      return {
        baseUrl: 'https://cnodejs.org/api/v1'
      };
    } else {
      // 开发环境mock数据
      if(mock){
        return {
          baseUrl: '/api'
        };
      }else{
        // 开发环境代理地址
        return {
          baseUrl: '/apitest'
        };
      }
    }
  }
};
