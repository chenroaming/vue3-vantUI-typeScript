/*
 * @Description:api接口response类型声明文件
 * @Version: 1.0.0
 * @Author: chenroaming
 * @Date: 2022-08-19 11:38:43
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-24 14:59:21
 */

export declare interface listItem {
  FSRQ: string,
  DWJZ: string,
  [k: string]: string | null
}

interface Data {
  Feature: string,
  FundType: string,
  LSJZList: listItem[],
  SYType: null | number,
  isNewType: boolean
}

export declare interface getFundDetailList {
  Data: Data,
  ErrCode: number,
  ErrMsg: null | string,
  PageIndex: number,
  PageSize: number,
  TotalCount: number,
  Expansion: null | string
}
