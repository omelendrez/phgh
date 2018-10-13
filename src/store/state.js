const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || null,
  user: {
    first: null,
    last: null
  },
  status: null,
  apiError: null,
  apiMessage: null,
  roles: [],
  users: [],
  newUser: {},
  newRole: {}
}
export default state
