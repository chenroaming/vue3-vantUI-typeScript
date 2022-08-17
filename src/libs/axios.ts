import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { omit } from 'lodash'
import $router from '@/router'
import { Toast } from 'vant'
import { paramsConfing, apiConfig, apiItems, maps, axiosOptions, kIsNumberVIsStr } from '@/types'
let showTips = false

const contentType:kIsNumberVIsStr = {
  1: 'application/json',
  2: 'multipart/form-data',
  3: 'application/x-www-form-urlencoded'
}
// 请求头配置信息
type Config = AxiosRequestConfig & { showTips? :boolean }
// // create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: process.env === 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_TEST_API,
  // 超时，注意！axios的超时是中断请求，即canceled，非timeout，具体参见http://www.axios-js.com/zh-cn/docs/#axios-create-config
  timeout: 50000
})
// request interceptor 请求拦截器
service.interceptors.request.use(
  (config:Config):Config => {
    showTips = !!config.showTips
    if (config.method === 'post') {
      if (!(config.data instanceof FormData)) { // formData的情况单独处理
        config.data = {
          ...config.data
        }
      }
    }
    if (config?.headers) {
      // 预先判断config配置是否存在，存在后才可对headers请求头做相应的配置操作，以下仅为示例
      // 使用.标点符号的方式来写，避免eslint报错is better written in dot notation  dot-notation
      config.headers.authorization = 'dfdabizxnaigiasduiasdfan'
    }
    return config
  },
  error => {
    showTips = false
    // do something with request error
    Toast.fail(error.message)
    return Promise.reject(new Error(error.message || 'Error'))
  }
)

// response interceptor 回复拦截器
service.interceptors.response.use(
  /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

  /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
  (response:AxiosResponse) => {
    const res = response.data
    // 假设接口返回的code为非20000，则判断为错误，可根据实际项目调整
    if (res.code === 20000) {
      showTips && Toast({
        message: res.message,
        type: 'success',
        duration: 5 * 1000
      })
      showTips = false
      return res
    } else {
      Toast({
        message: `错误信息：${res.message}`,
        type: 'fail',
        duration: 5 * 1000
      })
      showTips = false
      return res
      // return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    if (error.response.status === 401) { // 401为token失效，重定向到登录页
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

export function ajax (method = 'post', url:string, options:axiosOptions) {
  options.data = options.data || {}
  const opts:apiItems = {
    key: '',
    url,
    method,
    headers: {
      'Content-type': contentType[options.cType as keyof typeof contentType]
    },
    showTips: options.showTips
  }
  if (method === 'get') {
    opts.params = options.data
  }
  if (method === 'delete') {
    const [params] = Object.values(options.data)
    opts.url = `${opts.url}/${params}`
  }
  if (method === 'post' || method === 'put') {
    opts.data = options.data
  }
  return service(opts)
}

export function generate (config:apiConfig) {
  const map:maps = {}
  const { items } = config
  for (let i = 0; i < items.length; i++) {
    map[items[i].key] = (data:paramsConfing) => {
      return ajax(items[i].method, `${(items[i].prefix || config.prefix || '')}${items[i].url}`, {
        data,
        ...(omit(items[i], ['key', 'url', 'method', 'prefix', 'params']) || {}),
        cType: items[i].cType || 1
      })
    }
  }
  return map
}

export default {}
