import { Module, VuexModule, namespace, VuexMutation, VuexAction } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'

@Module({
  stateFactory: true
})
export default class Clients extends VuexModule {
  isLoading = true
  items = []

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

  @VuexAction({ commit: 'SET_ITEMS' })
  async setItems () {
    this.context.commit('RESET_STATE')

    const items = await $axios.$get('clients')

    this.context.commit('SET_LOADING')

    return items
  }
}

export const clients = namespace('clients')
