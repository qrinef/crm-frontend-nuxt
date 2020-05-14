import { Module, VuexModule, namespace, VuexMutation, VuexAction } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'

@Module({
  stateFactory: true
})
export default class Clients extends VuexModule {
  isLoading = true
  isDrawer = false
  items = []
  client = {
    id: null,
    name: null,
    surname: null,
    phone: null,
    email: null
  }

  get operationType () {
    return this.client.id === null
  }

  @VuexMutation
  SET_NAME (payload: any) {
    this.client.name = payload
  }

  @VuexMutation
  SET_SURNAME (payload: any) {
    this.client.surname = payload
  }

  @VuexMutation
  SET_PHONE (payload: any) {
    this.client.phone = payload
  }

  @VuexMutation
  SET_EMAIL (payload: any) {
    this.client.email = payload
  }

  @VuexMutation
  SET_ITEMS (items: never[]) {
    this.items = items
  }

  @VuexMutation
  SET_LOADING () {
    this.isLoading = !this.isLoading
  }

  @VuexMutation
  SET_DRAWER (payload: any) {
    this.isDrawer = payload

    if (!payload) {
      this.client = {
        id: null,
        name: null,
        surname: null,
        phone: null,
        email: null
      }
    }
  }

  @VuexMutation
  SET_CLIENT (scope: any) {
    this.client = { ...scope }
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

  @VuexAction
  async create () {
    await $axios.$post('clients', this.client)

    this.context.commit('SET_DRAWER', false)
    this.context.dispatch('setItems')
  }

  @VuexAction
  async update () {
    await $axios.$put(`clients/${this.client.id}`, this.client)

    this.context.commit('SET_DRAWER', false)
    this.context.dispatch('setItems')
  }

  @VuexAction
  async delete () {
    await $axios.$delete(`clients/${this.client.id}`)

    this.context.dispatch('setItems')
  }
}

export const clients = namespace('clients')
