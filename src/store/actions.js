import axios from 'axios'
import { API, defaultPassword } from '@/utils'

const handleError = err => {
  return err.response || {
    data: { error: 'There is a problem trying to connect to backend server' }
  }
}

const actions = {
  setAppTitle ({ commit }, payload) {
    commit('setAppTitle', payload)
  },
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'users/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          const message = resp.data.message
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token, user, message })
          resolve(resp)
        })
        .catch(err => {
          handleError(err)
          commit('request_error', handleError(err))
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  users ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'users', method: 'GET' })
        .then(resp => {
          const users = resp.data.users
          const token = localStorage.getItem('token')
          axios.defaults.headers.common['Authorization'] = token
          commit('users_success', users)
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  saveUser ({ commit }, { user, isNew }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      if (isNew && !user.password) {
        user.password = defaultPassword
      }
      const url = `${API}users${!isNew ? '/' + user.id : ''}`
      axios({ url: url, data: user, method: isNew ? 'POST' : 'PUT' })
        .then(resp => {
          if (resp.data.success) {
            const user = resp.data.user
            const message = resp.data.message
            commit('save_user_success', { user, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  deleteUser ({ commit }, { user }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'users/' + user.id, method: 'DELETE' })
        .then(resp => {
          if (resp.data.success) {
            const user = resp.data.user
            const message = resp.data.message
            commit('delete_user_success', { user, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  roles ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'roles', method: 'GET' })
        .then(resp => {
          const roles = resp.data.roles
          const token = localStorage.getItem('token')
          axios.defaults.headers.common['Authorization'] = token
          commit('roles_success', roles)
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  saveRole ({ commit }, { role, isNew }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      const url = `${API}roles${!isNew ? '/' + role.id : ''}`
      axios({ url: url, data: role, method: isNew ? 'POST' : 'PUT' })
        .then(resp => {
          if (resp.data.success) {
            const role = resp.data.role
            const message = resp.data.message
            commit('save_role_success', { role, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  deleteRole ({ commit }, { role }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'roles/' + role.id, method: 'DELETE' })
        .then(resp => {
          if (resp.data.success) {
            const role = resp.data.role
            const message = resp.data.message
            commit('delete_role_success', { role, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  getConfirm ({ commit }, { confirm }) {
    commit('confirm', confirm)
  },
  saveUserRole ({ commit }, { userRoles }) {
    return new Promise((resolve, reject) => {
      axios({ url: API + 'userroles', data: userRoles, method: 'POST' })
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  userRoles ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'userroles/' + user.UserId, data: user, method: 'GET' })
        .then(resp => {
          const userRoles = resp.data.userRoles
          const token = localStorage.getItem('token')
          axios.defaults.headers.common['Authorization'] = token
          commit('user_roles_success', userRoles)
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  updateConfig ({ commit }, item) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'config', data: item, method: 'PUT' })
        .then(resp => {
          const config = resp.data.config
          const message = resp.data.message
          commit('change_config_success', { config, message })
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  loadConfig ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'config', method: 'GET' })
        .then(resp => {
          const config = resp.data.config
          const message = resp.data.message
          commit('change_config_success', { config, message })
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  audit ({ commit }, page) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'audit?page='+ page, method: 'GET' })
        .then(resp => {
          const audit = resp.data.audit
          const rows = resp.data.rows
          const message = resp.data.message
          commit('audit_success', { audit, rows, message })
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  loadHolidays ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('start_request')
      axios({ url: API + 'holiday', method: 'GET' })
        .then(resp => {
          const holidays = resp.data.holidays
          const message = resp.data.message
          commit('holiday_success', { holidays, message })
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  saveHoliday ({ commit }, holiday) {
    return new Promise((resolve, reject) => {
      axios({ url: API + 'holiday', data: holiday, method: 'POST' })
        .then(resp => {
          if (resp.data.success) {
            const holiday = resp.data.holiday
            const message = resp.data.message
            commit('save_holiday_success', { holiday, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  updateHoliday ({ commit }, holiday) {
    return new Promise((resolve, reject) => {
      axios({ url: API + 'holiday/' + holiday.id, data: holiday, method: 'PUT' })
        .then(resp => {
          if (resp.data.success) {
            const holiday = resp.data.holiday
            const message = resp.data.message
            commit('save_holiday_success', { holiday, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  },
  deleteHoliday ({ commit }, holiday) {
    return new Promise((resolve, reject) => {
      axios({ url: API + 'holiday/' + holiday.id, method: 'DELETE' })
        .then(resp => {
          if (resp.data.success) {
            const holiday = resp.data.holiday
            const message = resp.data.message
            commit('delete_holiday_success', { holiday, message })
          } else {
            commit('request_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('request_error', handleError(err))
          reject(err)
        })
    })
  }
}

export default actions
