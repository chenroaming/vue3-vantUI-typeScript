/*
 * @Description: 将内联样式的px转换为rem，避免内联样式无法被postcss-pxtorem插件转换的问题
 * @Version: 1.0.0
 * @Author: chenroaming
 * @Date: 2022-08-23 15:57:40
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-30 09:48:38
 */

export function px2rem (px:string):string {
  if (/%/ig.test(px)) {
    return px
  }
  return `${(parseFloat(px) / 75)}rem`
}
