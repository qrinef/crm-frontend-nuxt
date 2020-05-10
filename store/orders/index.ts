import { Module, VuexModule, namespace, VuexMutation, VuexAction } from 'nuxt-property-decorator'
import dayjs from 'dayjs'
import { $axios } from '~/utils/api'

@Module({
  stateFactory: true
})
export default class Orders extends VuexModule {
  isLoading = true
  items: any[] = []

  @VuexMutation
  SET_ITEMS (items: never[]) {
    this.items = items
  }

  @VuexMutation
  SET_LOADING () {
    this.isLoading = !this.isLoading
  }

  @VuexMutation
  RESET_STATE () {
    this.items = []
    this.isLoading = true
  }

  get orders () {
    return this.items.map(stage => ({
      ...stage,
      orders: stage.orders.map((order: any) => ({
        ...order,
        name: `Order ${order.id}`,
        date: dayjs(order.createdAt).format('YYYY-MM-DD'),
        price: `$ ${order.price}`,
        client: {
          ...order.client,
          fullName: `${order.client.surname} ${order.client.name}`
        }
      }))
    }))
  }

  @VuexAction({ commit: 'SET_ITEMS' })
  async setItems () {
    this.context.commit('RESET_STATE')

    const items = await $axios.$get('orders')

    this.context.commit('SET_LOADING')

    return items
  }
}

export const orders = namespace('orders')
