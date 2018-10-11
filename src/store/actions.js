import axios from 'axios'
import { API, defaultPassword } from '@/utils'

const actions = {
  setAppTitle ({ commit }, payload) {
    commit('setAppTitle', payload)
  },
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: API + 'users/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token, user })
          resolve(resp)
        })
        .catch(err => {
          const error = err.response || { data: { error: 'Problem trying to connect with the backend server' } }
          commit('auth_error', error)
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
      commit('users_request')
      axios({ url: API + 'users', method: 'GET' })
        .then(resp => {
          const users = resp.data.users
          const token = localStorage.getItem('token')
          axios.defaults.headers.common['Authorization'] = token
          commit('users_success', users)
          resolve(resp)
        })
        .catch(err => {
          commit('users_error', err.response)
          reject(err)
        })
    })
  },
  addUser ({ commit }, { user, isNew }) {
    return new Promise((resolve, reject) => {
      commit('add_user_request')
      if (isNew) {
        user.password = defaultPassword
      }
      axios({ url: API + 'users', data: user, method: isNew ? 'POST' : 'PUT' })
        .then(resp => {
          if (resp.data.success) {
            const user = resp.data.user
            commit('add_user_success', user)
          } else {
            commit('add_user_error', resp)
          }
          resolve(resp)
        })
        .catch(err => {
          commit('add_user_error', err.response)
          reject(err)
        })
    })
  }
}

export default actions
