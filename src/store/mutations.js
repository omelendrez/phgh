const mutations = {
  authenticate(state, payload) {
    state.authenticated = payload
  },
  storeAppTItle(state, payload) {
    state.appTitle = payload
  }
}

export default mutations
