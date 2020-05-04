const getDefaultState = () => ({
  isLoading: true,
  items: []
})

export const state = getDefaultState()

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

    const res = await this.$axios.$get('users')

    commit('setItems', res)
    commit('setLoading')
  }
}
