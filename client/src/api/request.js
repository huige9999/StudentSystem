import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 设置请求前的拦截
request.interceptors.request.use((config) => {
  // config就是你的请求
  // 做一些额外的事
  // config.header = ....
  // 请求放行
  return config;
});

// 设置详情的拦截
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么

    // 响应放行
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
