const mutations = {
  setAppTitle (state, payload) {
    state.appTitle = payload
  },
  start_request (state) {
    state.status = 'loading'
    state.apiError = null
  },
  request_error (state, error) {
    state.status = 'error'
    state.apiError = error
  },
  auth_success (state, { token, user }) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.authenticated = true
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = { first: '', last: '' }
    state.authenticated = false
  },
  users_success (state, users) {
    state.status = 'success'
    state.users = users
  },
  save_user_success (state, user) {
    state.status = 'success'
    state.newUser = user
  },
  delete_user_success (state, user) {
    state.status = 'success'
    state.newUser = user
  },
  roles_success (state, roles) {
    state.status = 'success'
    state.roles = roles
  },

}

export default mutations
