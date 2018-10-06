import axios from 'axios'

const actions = {
  setAuthentication ({ commit }, payload) {
    commit('authenticate', payload)
  },
  setAppTitle ({ commit }, payload) {
    commit('storeAppTItle', payload)
  },
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: 'http://localhost:3000/v1/users/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token, user })
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
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
  }
}

export default actions
