import axios from 'axios';
import { AxiosResponse } from 'axios/index';
import { getToken } from './index';
// import { HttpInfo } from '../types/index'

// http://127.0.0.1:8888
const Url: any = {
    '123.206.55.50': "//127.0.0.1:8888",
    "jasonandjay.com": '//127.0.0.1:8888',
    '127.0.0.1:5500': '//127.0.0.1:8888',
    'localhost:8081': '//127.0.0.1:8888',
}

const instance = axios.create({
    baseURL: Url[window.location.host],
    timeout: 1000,
    headers: { 'x-nideshop-token': getToken() }
});

// const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8888',
//     timeout: 3000,
//     headers: { 'x-nideshop-token': getToken() }
// });

// 请求拦截器
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
    // Do something with response data
    if (response.status !== 200) {
        // message.error(response.statusText);
    }
    return response.data;
}, (error) => {
    console.log('error...', error.response);
    if (error.response.status && error.response.status !== 200) {
        // message.error(error.response.statusText);
    } else {
        // message.error(error.response);
    }
    // Do something with response error
    return Promise.resolve(error);
}
);

export default instance;