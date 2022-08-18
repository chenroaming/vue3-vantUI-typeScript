/**
 * 自动导入 api 文件夹下各个模块包 并且生成对应的api映射
 */
import type { apiModule } from '@/types/api'

// 不需要导入的文件
const noImport:string[] = ['index']
// 请求api文件夹下所有文件
const apiModels = require.context('./', false, /\.ts$/)
const modules = apiModels.keys().reduce((module:apiModule, modulePath:string) => {
  // 解析文件名
  console.log(module)
  const moduleName:string = modulePath.replace(/^.\/(.*)\.ts/, '$1')
  const value = apiModels(modulePath)
  if (!noImport.includes(moduleName)) {
    module[moduleName] = value.default
  }
  return module
}, {})
export default {
  ...modules
}
