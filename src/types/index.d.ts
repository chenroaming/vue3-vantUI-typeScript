import type { RouteComponent } from 'vue-router'

export interface configuration {
  key: string
}

export interface maps {
  [k: string]: unknown
}
export interface paramsConfing {
  [k:string]: unknown
}

export interface kIsNumberVIsStr {
  [k:number]: string
}

export interface headers {
  [k:string]: string
}
export interface apiItems {
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
export interface apiConfig {
  prefix?: string,
  items: apiItems[]
}

export interface axiosOptions {
  params?: maps,
  data: maps,
  cType?: number | string,
  showTips?: boolean,
  headers?: object
}

export declare interface meta {
  title?: string,
  icon?: string
}
export declare interface routeRaw {
  name: string,
  path: string,
  component: RouteComponent,
  meta: meta,
  children?: routeRaw[]
}
