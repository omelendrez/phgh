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
  auth_error (state, error) {
    state.status = 'error'
    state.apiError = error
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = { first: '', last: '' }
    state.authenticated = false
  },
  users_request (state) {
    state.status = 'loading'
  },
  users_success (state, users) {
    state.status = 'success'
    state.users = users
  },
  users_error (state, error) {
    state.status = 'error'
    state.apiError = error
  }
}

export default mutations
