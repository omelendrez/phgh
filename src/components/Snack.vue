<template>
  <v-snackbar v-model="showSnack" :timeout="timeout" value="multi-line" top="top">
    {{ message }}
    <v-btn dark flat color="orange" @click="showSnack = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snack',
  data: () => ({
    showSnack: false,
    timeout: 0,
    top: true
  }),
  watch: {
    message () {
      if (this.message.length > 0) {
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
