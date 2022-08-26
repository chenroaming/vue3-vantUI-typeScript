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
