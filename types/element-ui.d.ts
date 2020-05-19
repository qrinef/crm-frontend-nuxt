import Vue from 'vue'

declare class ElementUIComponent extends Vue {
  static install (vue: typeof Vue): void
}

declare class ElScrollbar extends ElementUIComponent {
  native: boolean
  wrapStyle: any
  wrapClass: any
  viewClass: any
  viewStyle: any
  noresize: boolean
  tag: string
}

declare module 'element-ui/types' {
  interface Scrollbar extends ElScrollbar {}
  export class Scrollbar extends ElScrollbar {}
}
