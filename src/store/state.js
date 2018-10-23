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
  newRole: {},
  confirm: {
    title: null,
    text: null,
    action: null,
    item: null
  },
  actionStatus: null,
  userRoles: [],
  config: {},
  audit: [],
  holiday: {},
  holidays: []
}
export default state
