const API = 'http://localhost:3000/v1/' // 'https://phgh-be.herokuapp.com/v1/'
const defaultPassword = 'FITTOC'
const rules = {
  required: v => !!v || 'Required.',
  min: v => v.length >= 6 || 'Min 6 characters',
  validEmail: v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
}

export { API, defaultPassword, rules }
