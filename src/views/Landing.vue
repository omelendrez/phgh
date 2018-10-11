<template>
  <v-container fluid>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs12 class="image-xs-center">
        <v-img src="/img/icons/android-icon-72x72.png" width="72"></v-img>
      </v-flex>
    </v-layout>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Welcome to phgh Admin area</h1>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <blockquote class="blockquote text-xs-center">
        Here is where you control and see the status of the whole application
      </blockquote>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
      <v-btn color="primary" to="/signin">Sign In</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Landing'
}

</script>
