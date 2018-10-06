const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || '',
  user: {},
  status: ''
}
export default state
