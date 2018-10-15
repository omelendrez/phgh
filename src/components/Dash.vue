<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-card flat>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="card in cardsList" v-bind="{ [`xl${card.flex}`]: true }" :key="card.title">
              <v-card :color="card.color" class="white--text">
                <v-card-title>
                  {{card.title}}
                </v-card-title>
                <v-card-text class="text-xs-center">
                  <h2>{{card.value}}</h2>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="#f9aa33" @click="showAlert">See details</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <Alert :title="title" :message="message" :close="hideAlert" />
  </v-layout>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Dash',
  props: ['items'],
  components: {
    Alert
  },
  data: () => ({
    cardsList: [],
    title: '',
    message: '',
    alerted: false
  }),
  watch: {
    items () {
      this.cardsList = this.items
    }
  },
  methods: {
    showAlert () {
      if (!this.alerted) {
        this.title = 'To be implemented'
        this.message = 'Dashboard details are not yet implemented but it will be available soon. Each option will take you to a different view containing the most relevant details of each feature'
        this.alerted = true
      }
    },
    hideAlert () {
      this.title = ''
      this.message = ''
    }
  },
  created () {
    this.cardsList = this.items
  }
}
</script>
