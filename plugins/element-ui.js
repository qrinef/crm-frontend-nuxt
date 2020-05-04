import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import LayoutContainer from '@/components/LayoutContainer.vue'

Vue.use(Element, { locale })
Vue.component('LayoutContainer', LayoutContainer)
