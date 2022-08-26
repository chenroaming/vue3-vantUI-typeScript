import type { RouteRecordRaw } from 'vue-router'

export interface Configuration {
  key: string
}

export interface Headers {
  [k:string]: string
}
export interface ApiItems {
  key: string
  prefix?: string
  url: string
  method: string
  headers?: headers
  showTips?: boolean
  params?: paramsConfing
  data?: paramsConfing
  cType?: string | number
}
export interface ApiConfig {
  prefix?: string,
  items: apiItems[]
}

export interface AxiosOptions {
  params?: maps,
  data: maps,
  cType?: number | string,
  showTips?: boolean,
  headers?: object
}

export declare interface Meta {
  title?: string,
  icon?: string
}
export declare type RouteRaw = {
  meta: { title: string, icon: string }
} & RouteRecordRaw

export declare type CustomRouteRecordRaw = [
  Omit<RouteRecordRaw, 'children'> & {
    children: routeRaw[]
  }
]
