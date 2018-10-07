import axios from 'axios'
import { API } from '@/utils'

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
          commit('auth_error', err.response)
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
  }
}

export default actions
