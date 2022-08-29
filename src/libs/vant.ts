import type { App } from 'vue'
// 手动引入函数式组件样式，参见：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
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
