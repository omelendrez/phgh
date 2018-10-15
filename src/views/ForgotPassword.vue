<template>
  <v-container class="forgot-password">
    <v-form v-model="valid" ref="form">
      <v-text-field v-model="email" label="E-mail" :rules="[rules.required, rules.validEmail]"></v-text-field>
      <v-btn block color="primary" :disabled="activeSubmit" @click="submit">RESET PASSWORD</v-btn>
      <v-btn small class="back" flat color="red" @click="back">Back to Signin</v-btn>
    </v-form>
    <Snack v-bind:message="alertMessage" />
  </v-container>
</template>

<script>
import Snack from './../components/Snack';
import store from '@/store'
import { rules } from '@/utils'

export default {
  name: 'ForgotPassword',
  store,
  components: {
    Snack
  },
  data: () => ({
    valid: false,
    activeSubmit: false,
    alertMessage: '',
    email: '',
    rules: {}
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
      this.activeSubmit = true
      this.back()
    },
    back () {
      this.$router.push({ name: 'signin' })
    }
  },
  created () {
    store.dispatch('setAppTitle', 'Forgot password')
    this.rules = rules
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forgot-password {
  margin: 5% auto;
  max-width: 500px;
}
.back {
  text-transform: capitalize;
  margin-top: 60px;
}
</style>
