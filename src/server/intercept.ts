import axios from 'axios'

// 创建一个单例（实例）
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 4000,
    responseType: 'json',
})

// 请求拦截
instance.interceptors.request.use((config)=>{
    // 部分接口需要拿到token
    let token = localStorage.getItem('token');
    if(token){
        config.headers!.token = token
    }
    return config;
}, err=>{
    return Promise.reject(err)
});


// 响应拦截
instance.interceptors.response.use(res=>{
    return res;
}, err=>{
    return Promise.reject(err)
});

// 整体导出
export default instance;