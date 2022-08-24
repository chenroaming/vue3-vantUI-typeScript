/*
 * @Description: store的类型声明文件，可根据不同模块进行不同的声明
 * @Version: 1.0.0
 * @Author: chenroaming
 * @Date: 2022-08-22 15:46:17
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-24 16:19:15
 */

export declare interface state {
  configuration: setting,
  isCollapse: boolean,
  pageTitle: string,
  keepAliveRoute: Array<string>
}
