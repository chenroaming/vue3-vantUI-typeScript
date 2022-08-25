import { createStore } from 'vuex'
import { maps } from '@/types/utils'
interface module {
  [k: string]: maps
}
// 导入所有的vuex模块
const storeModels = require.context('./modules/', false, /\.ts$/)
const modules = storeModels.keys().reduce((module:module, modulePath:string) => {
  // 解析文件名
  const moduleName:string = modulePath.replace(/^.\/(.*)\.ts/, '$1')
  const value = storeModels(modulePath)
  module[moduleName] = value.default
  return module
}, {})
export default createStore({
  modules: {
    ...modules
  }
})
