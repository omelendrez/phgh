const actions = {
  setAuthentication({ commit }, payload) {
    commit('authenticate', payload)
  },
  setAppTitle({ commit }, payload) {
    commit('storeAppTItle', payload)
  }
}

export default actions
