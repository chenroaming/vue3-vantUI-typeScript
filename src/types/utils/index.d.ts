/*
 * @Description: 工具类声明文件
 * @Version:
 * @Author: chenroaming
 * @Date: 2022-08-25 09:10:20
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-26 09:07:27
 */
import type { AxiosRequestConfig } from 'axios'
export interface Maps {
  [k: string]: unknown
}

export interface KIsNumberVIsStr {
  [k:number]: string
}

export interface ParamsConfing {
  [k:string]: unknown
}

export interface Headers {
  [k:string]: string
}

export interface Configuration {
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
