import axios, { AxiosInstance } from 'axios'
import $router from '@/router'
import { Toast } from 'vant'
import type { AxiosRqConfig } from '@/types/utils'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 是否在收到接口回复后弹提示语
let showTips = false

class Request {
  config: AxiosRqConfig
  axiosInstance: AxiosInstance
  constructor (_config:AxiosRqConfig) {
    this.config = _config
    this.axiosInstance = axios.create(_config)

    // request interceptor 请求拦截器
    this.axiosInstance.interceptors.request.use(
      (config:AxiosRqConfig):AxiosRqConfig => {
        showTips = !!config.showTips
        if (config.method === 'post') {
          if (!(config.data instanceof FormData)) { // formData的情况单独处理
            config.data = {
              ...config.data
            }
          }
        }
        if (config.headers) {
          // 预先判断config配置是否存在，存在后才可对headers请求头做相应的配置操作，以下仅为示例
          // 使用.标点符号的方式来写，避免eslint报错is better written in dot notation  dot-notation
          config.headers.authorization = 'dfdabizxnaigiasduiasdfan'
        }
        return config
      },
      error => {
        showTips = false
        // 请求失败时，弹窗提示，可根据实际业务修改
        Toast.fail(error.message)
        return Promise.reject(new Error(error.message || 'Error'))
      }
    )

    // response interceptor 回复拦截器
    this.axiosInstance.interceptors.response.use(
      (response:AxiosResponse) => {
        const { data: res } = response
        // 临时的一个判断方法，这里调用的是天天基金网的接口，只要Data为true，则判断为请求成功
        // 具体可根据实际业务进行修改
        if (res.Data) {
          showTips && Toast({
            message: '查询成功！',
            type: 'success',
            duration: 5 * 1000
          })
          showTips = false
          return response
        }
        // 假设接口返回的code为非20000，则判断为错误，可根据实际项目调整
        if (res.code === 20000) {
          showTips && Toast({
            message: res.message,
            type: 'success',
            duration: 5 * 1000
          })
          showTips = false
          return response
        } else {
          Toast({
            message: `错误信息：${res.message}`,
            type: 'fail',
            duration: 5 * 1000
          })
          showTips = false
          return response
          // return Promise.reject(new Error(res.message || 'Error'))
        }
      },
      error => {
        // 401为token失效，重定向到登录页，具体可根据实际业务进行修改
        if (error.response.status === 401) {
          $router.replace({ path: '/login', query: {} })
          return
        }
        showTips = false
        error.message && Toast(
          {
            message: `服务器或者网络出错！错误信息：${error.message}，HTTP错误码：${error.response.status || '暂无'}`,
            type: 'fail',
            forbidClick: true
          }
        )
        return Promise.reject(new Error(error.message || 'Error'))
      }
    )
  }

  get = (config:AxiosRqConfig) => {
    return this.axiosInstance({
      method: 'get',
      ...config
    })
  }

  post = (config:AxiosRqConfig) => {
    return this.axiosInstance({
      method: 'post',
      ...config
    })
  }

  delete = (config:AxiosRqConfig) => {
    return this.axiosInstance({
      method: 'delete',
      ...config
    })
  }

  put = (config:AxiosRqConfig) => {
    return this.axiosInstance({
      method: 'put',
      ...config
    })
  }
}

const baseConfig:AxiosRequestConfig = {
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: process.env === 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_TEST_API,
  // 超时，注意！axios的超时是中断请求，即canceled，非timeout，具体参见http://www.axios-js.com/zh-cn/docs/#axios-create-config
  timeout: 50000
}

export default new Request(baseConfig)
