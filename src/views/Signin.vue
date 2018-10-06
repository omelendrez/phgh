<template>
  <v-container class="signin">
    <v-form v-model="valid" ref="form">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" type="password" :counter="8" :rules="passwordRules" label="Password" required></v-text-field>
      <v-btn block color="primary" :disabled="activeSubmit" @click="submit">Sign In</v-btn>
      <v-checkbox label="Keep me signed" v-model="keepSigned"></v-checkbox>
      <v-btn flat small class="right forgot" color="red" @click="reset">Forgot password?</v-btn>
    </v-form>
    <Snack v-bind:message="alertMessage" />
  </v-container>
</template>

<script>
import Snack from '@/components/Snack';
import store from '@/store/index'

export default {
  name: 'Signin',
  store,
  components: {
    Snack
  },
  data: () => ({
    valid: false,
    activeSubmit: false,
    keepSigned: false,
    alertMessage: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Password must be at list 8 characters'
    ]
  }),
  methods: {
    submit () {
      if (!this.valid) {
        const errors = []
        this.$refs.form.inputs.map(input => {
          input.errorBucket.map(error => {
            errors.push(error)
          })
        })
        this.alertMessage = errors[0]
        return
      }
      let email = this.email
      let password = this.password
      store.dispatch('login', { email, password })
        .then(() => this.$router.push({ name: 'home' }))
        .catch(err => console.log(err))
    },
    reset () {
      this.$router.push({ name: 'ForgotPassword' })
    }
  },
  created () {
    store.dispatch('setAppTitle', 'Sign In')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signin {
  max-width: 500px;
  margin: 5% auto;
}
.forgot {
  margin-top: 30px;
  text-transform: capitalize;
}
</style>
