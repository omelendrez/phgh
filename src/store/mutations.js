const mutations = {
  setAppTitle (state, payload) {
    state.appTitle = payload
  },
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, { token, user }) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.authenticated = true
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = {}
    state.authenticated = false
  },
}

export default mutations
