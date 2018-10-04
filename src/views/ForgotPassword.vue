<template>
  <v-container class="forgot-password">
    <span class="headline">
      Reset your password
    </span>
    <v-form v-model="valid" ref="form">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-btn block color="primary" :disabled="activeSubmit" @click="submit">RESET PASSWORD</v-btn>
      <v-btn small class="back" color="warning" @click="back">Back to Login</v-btn>
    </v-form>
    <Snack v-bind:message="alertMessage"/>
  </v-container>
</template>

<script>
import Snack from './../components/Snack';

export default {
  name: 'ForgotPassword',
  components: {
    Snack
  },
  data: () => ({
    valid: false,
    activeSubmit: false,
    alertMessage: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    submit () {
      if(!this.valid) {
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
      this.$router.push({ name: 'login' })
    },
    back() {
      this.$router.push({ name: 'login' })
    }
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
  margin-top: 60px;
}
</style>
