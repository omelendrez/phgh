const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || '',
  user: { first: '', last: '' },
  status: '',
  apiError: null,
  roles: [],
  users: []
}
export default state
