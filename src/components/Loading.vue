<template>
  <v-dialog v-model="dialog" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        Loading...
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Loading',
  store,
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    status () {
      return store.getters.status
    }
  },
  watch: {
    status () {
      this.activate()
    }
  },
  created () {
    this.activate()
  },
  methods: {
    activate () {
      this.dialog = this.status === 'loading'
    }
  }
}
</script>
