const getters = {
  status: state => state.status,
  isAuthenticated: state => state.authenticated,
  authStatus: state => state.status,
  appTitle: state => state.appTitle,
  user: state => state.user,
  apiError: state => state.apiError,
  apiMessage: state => state.apiMessage,
  confirm: state => state.confirm,
  actionStatus: state => state.actionStatus,
  users: state => state.users,
  newUser: state => state.newUser,
  roles: state => state.roles,
  newRole: state => state.newRole
}

export default getters
