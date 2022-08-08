import type { App } from 'vue'
import {
  Button,
  Popup,
  Collapse,
  CollapseItem,
  List,
  Icon,
  Toast,
  Tabbar,
  TabbarItem
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
}
