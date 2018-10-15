<template>
  <v-dialog v-model="dialog" lazy persistent max-width="400">
    <v-card>
      <v-card-title class="headline">
        {{ confirm.title }}
      </v-card-title>

      <v-card-text>
        {{ confirm.text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat color="primary" @click="dialog = false">
          No
        </v-btn>

        <v-btn flat color="error" @click="execute">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store'

export default {
  name: 'Dialog',
  store,
  data () {
    return {
      dialog: false
    }
  },
  props: [
    'confirm'
  ],
  computed: {
    actionStatus() {
      return store.getters.actionStatus
    }
  },
  watch: {
    confirm () {
      this.dialog = this.confirm.text.length
    },
    actionStatus() {
      this.dialog = false
    }
  },
  methods: {
    execute () {
      const { action, item } = this.confirm
      store.dispatch(action, item)
    }
  }
}
</script>

<style scoped>
</style>
