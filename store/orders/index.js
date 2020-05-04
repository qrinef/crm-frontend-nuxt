import dayjs from 'dayjs'

const getDefaultState = () => ({
  isLoading: true,
  items: []
})

export const state = getDefaultState()

export const getters = {
  items: state =>
    state.items.map(item => ({
      ...item,
      orders: item.orders.map(order => ({
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

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  setLoading (state) {
    state.isLoading = state.isLoading !== true
  },
  resetState (state) {
    Object.assign(state, getDefaultState())
  }
}

export const actions = {
  async setItems ({ commit }) {
    commit('resetState')

    const res = await this.$axios.$get('orders')

    commit('setItems', res)
    commit('setLoading')
  }
}
