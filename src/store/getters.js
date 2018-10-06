const getters = {
  isAuthenticated: state => state.authenticated,
  authStatus: state => state.status,
  getAppTitle: state => state.appTitle
}

export default getters
