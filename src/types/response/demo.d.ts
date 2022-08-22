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
