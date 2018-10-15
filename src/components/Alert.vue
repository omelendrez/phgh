<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="headline blue-grey white--text" primary-title>
          {{title}}
        </v-card-title>
        <v-card-text>
          {{message}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#344955" flat @click="hideMessage">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    close: {
      type: Function
    }
  },
  data: () => ({
    dialog: false,
    alertTitle: '',
    alertMessage: ''
  }),
  watch: {
    message () {
      this.alertTitle = this.title
      this.alertMessage = this.message
      this.dialog = this.message.length
    }
  },
  methods: {
    hideMessage () {
      this.close()
    }
  }
}
</script>
