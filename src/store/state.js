const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  roles: []
}
export default state
