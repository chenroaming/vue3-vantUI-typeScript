/*
 * @Description: axios文件封装类型声明文件
 * @Version: 1.0.0
 * @Author: chenroaming
 * @Date: 2022-08-18 16:29:22
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-26 09:07:25
 */

export declare interface ModuleItem {
  [k: string]: (data:object) => unknown
}
export declare interface ApiModule {
  [k: string]: moduleItem
}
