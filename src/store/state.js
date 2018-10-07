const state = {
  appTitle: 'PHGH',
  authenticated: false,
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  apiError: null,
  roles: null
}
export default state
