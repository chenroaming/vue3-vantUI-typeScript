export declare interface moduleItem {
  [k: string]: (data:object) => unknown
}
export declare interface apiModule {
  [k: string]: moduleItem
}
