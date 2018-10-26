const mutations = {
  setAppTitle(state, payload) {
    state.appTitle = payload;
  },
  start_request(state) {
    state.status = "loading";
    state.apiError = null;
  },
  request_error(state, error) {
    state.status = "error";
    state.apiError = error;
  },
  auth_success(state, { token, user, message }) {
    state.status = "success";
    state.token = token;
    state.user = user;
    state.apiMessage = message;
    state.authenticated = true;
  },
  logout(state) {
    state.status = "";
    state.token = "";
    state.user = { first: "", last: "" };
    state.apiMessage = "You have loged out";
    state.authenticated = false;
  },
  users_success(state, users) {
    state.status = "success";
    state.users = users;
  },
  save_user_success(state, { user, message }) {
    state.status = "success";
    state.newUser = user;
    state.apiMessage = message;
  },
  delete_user_success(state, { user, message }) {
    state.status = "success";
    state.newUser = user;
    state.apiMessage = message;
    state.actionStatus = "success";
  },
  roles_success(state, roles) {
    state.status = "success";
    state.roles = roles;
  },
  save_role_success(state, { role, message }) {
    state.status = "success";
    state.newRole = role;
    state.apiMessage = message;
  },
  delete_role_success(state, { role, message }) {
    state.status = "success";
    state.newRole = role;
    state.apiMessage = message;
    state.actionStatus = "success";
  },
  confirm(state, confirm) {
    state.actionStatus = null;
    state.confirm = confirm;
  },
  user_roles_success(state, userRoles) {
    state.status = "success";
    state.userRoles = userRoles;
  },
  change_config_success(state, { config, message }) {
    state.status = "success";
    state.config = config;
    state.apiMessage = message;
  },
  audit_success(state, { audit, rows, message }) {
    state.status = "success";
    state.audit = { rows: audit, count: rows };
    state.apiMessage = message;
  },
  holiday_success(state, { holidays, message }) {
    state.status = "success";
    state.holidays = holidays;
    state.apiMessage = message;
  },
  save_holiday_success(state, { holiday, message }) {
    state.status = "success";
    state.holiday = holiday;
    state.apiMessage = message;
  },
  delete_holiday_success(state, { holiday, message }) {
    state.status = "success";
    state.holiday = holiday;
    state.apiMessage = message;
    state.actionStatus = "success";
  }
};

export default mutations;
