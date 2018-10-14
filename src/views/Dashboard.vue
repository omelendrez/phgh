<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                <v-card :color="card.color" class="white--text">
                  <v-card-title>
                    {{card.title}}
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    <h2>{{card.value}}</h2>
                  </v-card-text>
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
      { title: 'System', value: 'OK', color: 'green', flex: 4 },
      { title: 'Aplication', value: 'OK', color: 'green', flex: 4 },
      { title: 'Database', value: 'OK', color: 'green', flex: 4 },
      { title: 'Amount in the system', value: 'NGN 123,456,789.00', color: 'red', flex: 12 },
      { title: 'Bitcoins', value: 'NGN 456,789.00', color: 'blue', flex: 12 },
      { title: 'Admins', value: '6', color: 'brown', flex: 6 },
      { title: 'Roles', value: '3', color: 'purple', flex: 6 },
      { title: 'Customers', value: '932', color: 'deep-purple', flex: 6 },
      { title: 'Transactions', value: '75,883', color: 'teal', flex: 6 }
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Dashboard')
  }
}

</script>

<style scoped>
</style>

