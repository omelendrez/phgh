const getters = {
  isAuthenticated: state => state.authenticated,
  authStatus: state => state.status,
  appTitle: state => state.appTitle,
  user: state => state.user,
  apiError: state => state.apiError
}

export default getters
