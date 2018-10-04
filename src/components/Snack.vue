<template>
  <v-snackbar
    v-model="showSnack"
    :timeout= "timeout"
    :top="top"
  >
    {{ message }}
    <v-btn
      color="orange"
      flat
      @click="showSnack = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snack',
  data: () => ({
    timeout: 6000,
    showSnack: false,
    top: true
  }),
  watch: {
    message() {
      if(this.message.length> 0) {
        this.showSnack = false
        this.showSnack = true
      }
    }
  },
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
