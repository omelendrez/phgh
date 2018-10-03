<template>
  <v-container class="login">
    <span class="headline">
      Login to your account
    </span>
    <v-form v-model="valid">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" type="password" :counter="8" :rules="passwordRules" label="Password" required></v-text-field>
      <v-btn block color="primary" :disabled="!valid || !activeSubmit" @click="submit">LOGIN</v-btn>
      <v-checkbox label="Keep me signed" v-model="keepSigned"></v-checkbox>
      <v-btn flat small class="right forgot" color="red" @click="reset">Forgot password?</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: false,
    activeSubmit: true,
    keepSigned: false,
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
      // this.activeSubmit = false
      const payload = {
        email: this.email,
        password: this.password,
        keepSigned: this.keepSigned
      }
      console.log(payload)
    },
    reset () {
      this.$router.push({ name: 'reset-password' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  max-width: 600px;
}
.forgot {
  margin-top: 30px;
  text-transform: capitalize;
}
</style>
