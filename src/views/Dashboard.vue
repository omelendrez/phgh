<template>
  <v-container class="dashboard" grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10>
        <h1>
          <p>Examples</p>
        </h1>
      </v-flex>
      <v-flex xs5>
        <bar-chart :data="chartData"></bar-chart>
      </v-flex>
      <v-flex xs5>
        <pie-chart :donut="true" :data="chartData"></pie-chart>
      </v-flex>
      <v-flex xs5>
        <line-chart :data="chartData"></line-chart>
      </v-flex>
      <v-flex xs5>
        <column-chart :data="chartData"></column-chart>
      </v-flex>
      <v-flex xs5>
        <area-chart :data="chartData"></area-chart>
      </v-flex>
      <v-flex xs5>
        <geo-chart :data="chartData2"></geo-chart>
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
    chartData: [
      ['May', 33],
      ['Jun', 68],
      ['Jul', 21],
      ['Aug', 84],
      ['Sep', 10]
    ],
    chartData2: [
      ['United States', 33],
      ['Argentina', 20],
      ['United Kingdom', 35],
      ['Nigeria', 84],
      ['Germany', 53]
    ]
  }),
  created () {
    store.dispatch('setAppTitle', 'Dashboard')
  }
}

</script>

<style scoped>
</style>

