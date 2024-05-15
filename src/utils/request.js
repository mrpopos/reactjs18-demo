import axios from "axios";

// 创建axios实例
const instance = axios.create({
  baseURL: "http://127.0.0.1:8080", // 你的API基础URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，添加认证token到headers
    // if (localStorage.getItem('token')) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // 例如，检查状态码，返回数据等
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    // 例如，网络错误、超时等
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error(error.request);
    } else {
      // 发送请求时发生了某些事情，导致请求没有被发出
      console.error("Error", error.message);
    }
    return Promise.reject(error);
  }
);

export default instance
