
import axios from 'axios';
import {config} from '../../config/mock_conf'

let util = {};

util.ajax = axios.create({
    // baseURL: process.env.API_ROOT,
    baseURL:config.env().baseUrl,
    timeout: 30000
});

// 添加请求拦截器
util.ajax.interceptors.request.use( config => {
    switch (config.method) {
        case 'get':
            // config.params = Object.assign({},extra(),config.params)
            break;
        case 'post':
            // console.log(config.data)
            // config.data = qs.stringify(Object.assign({},extra(),config.data))
            break;
        default:
            break;
    }
    return config;
});
// 响应拦截器
util.ajax.interceptors.response.use(res => {
    // process.env.NODE_ENV == "development" && console.log(res.data.data);
    console.log(res)
    if (res.status === 200) return res.data.data;
    else {
        // process.env.NODE_ENV == "development" && console.log(res.data.info);
        return false;
    }
}, error => {
    return Promise.reject(error);
});

export default util;