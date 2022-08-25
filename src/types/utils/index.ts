/*
 * @Description: 工具类声明文件
 * @Version:
 * @Author: chenroaming
 * @Date: 2022-08-25 09:10:20
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-25 10:59:16
 */
import type { AxiosRequestConfig } from 'axios'
export interface maps {
  [k: string]: unknown
}

export interface kIsNumberVIsStr {
  [k:number]: string
}

export interface paramsConfing {
  [k:string]: unknown
}

export interface headers {
  [k:string]: string
}

export interface configuration {
  key: string
}

/**
 * @description: axios请求头类型声明
 * @return {*}
 * @author: chenroaming
 */
export interface AxiosRqConfig extends AxiosRequestConfig {
  showTips?: boolean // 是否弹窗提示的开关
}
