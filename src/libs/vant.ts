/*
 * @Description: 按需引入vant组件，减少编译打包后的体积
 * @Author: chenroaming
 * @Date: 2022-07-20 13:48:27
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-08-29 09:49:41
 */

import type { App } from 'vue'
// 手动引入函数式组件样式，参见：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
// 提示：在单个项目中不应该同时使用「全量引入」和「按需引入」，否则会导致代码重复、样式错乱等问题。
// 参见：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
import {
  Button,
  Popup,
  Collapse,
  CollapseItem,
  List,
  Icon,
  Toast,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Field,
  Picker
} from 'vant'
export default (app:App):void => {
  app.use(Button)
  app.use(Popup)
  app.use(Collapse)
  app.use(CollapseItem)
  app.use(List)
  app.use(Icon)
  app.use(Toast)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Field)
  app.use(Picker)
}
