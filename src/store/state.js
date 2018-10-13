const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || '',
  user: { first: '', last: '' },
  status: '',
  apiError: null,
  apiMessage: null,
  roles: [],
  users: [],
  newUser: {},
  newRole: {}
}
export default state
