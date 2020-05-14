import Vue from 'vue'
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Row,
  Col,
  Scrollbar,
  Loading,
  Drawer,
  Table,
  TableColumn,
  Button,
  Form,
  FormItem,
  Input,
  Message,
  MessageBox
} from 'element-ui'
import LayoutContainer from '@/components/LayoutContainer.vue'

Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Scrollbar.name, Scrollbar)
Vue.component(Drawer.name, Drawer)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.component('LayoutContainer', LayoutContainer)
