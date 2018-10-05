const getters = {
  isAuthenticated(state) {
    return state.authenticated
  },
  getAppTitle(state) {
    return state.appTitle
  }
}

export default getters
