<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in cards" v-bind="{ [`xl${card.flex}`]: true }" :key="card.title">
                <v-card :color="card.color" class="white--text">
                  <v-card-title>
                    {{card.title}}
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    <h2>{{card.value}}</h2>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat color="#f9aa33">See details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Dashboard',
  store,
  data: () => ({
    cards: [
      { title: 'System', value: 'OK', color: '#344955', flex: 4 },
      { title: 'Aplication', value: 'OK', color: '#4a6572', flex: 4 },
      { title: 'Database', value: 'OK', color: '#356859', flex: 4 },
      { title: 'Amount in the system', value: 'NGN 3,456,789', color: '#344955', flex: 3 },
      { title: 'Bitcoins', value: 'NGN 456,789', color: '#4a6572', flex: 3 },
      { title: 'Transactions', value: '932', color: '#356859', flex: 3 },
      { title: 'Blocked customers', value: '83', color: '#344955', flex: 3 }
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Dashboard')
  }
}

</script>

<style scoped>

</style>

