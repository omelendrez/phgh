<template>
  <v-app class="container">
    <v-navigation-drawer v-if="isAuthenticated" v-model="showDrawer" class="blue-grey lighten-5" stateles value="true" fixed clipped>
      <v-list>
        <v-btn class="right" icon @click.stop="showDrawer = false">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-list-tile @click="home()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle">
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
          <v-list-group no-action sub-group>
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="admin[2]">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-group sub-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="crud[2]">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" dark>
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer" v-if="isAuthenticated"></v-toolbar-side-icon>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge v-if="showAlert && isAuthenticated">
        <v-icon @click="showAlerts" color="yellow">
          error
        </v-icon>
      </v-badge>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app v-if="isAuthenticated">
      <v-bottom-nav :active.sync="activeBtn" :value="showNav" absolute color="transparent">
        <v-btn flat color="blue-grey">
          <span>Recents</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'app',
  store,
  data () {
    return {
      showDrawer: false,
      activeBtn: 1,
      showNav: true,
      showAlert: false,
      admins: [
        ['Management', 'people_outline', this.doThis],
        ['Settings', 'settings', this.doThis]
      ],
      cruds: [
        ['Create', 'add', this.doThis],
        ['Read', 'insert_drive_file', this.doThis],
        ['Update', 'update', this.doThis],
        ['Delete', 'delete', this.doThis]
      ]
    }
  },
  watch: {
    isAuthenticated() {
      if(!this.isAuthenticated) {
        this.$router.push({name: 'signin'})
      }
    }
  },
  computed: {
    isAuthenticated () {
      return store.getters.isAuthenticated
    },
    appTitle() {
      return store.getters.getAppTitle
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'home' })
    },
    logout () {
      this.showDrawer = false
      store.dispatch('setAuthentication', false)
    },
    doThis (e) {
      console.log('called', e)
    },
    showAlerts() {
      console.log('this show go show the list of alerts')
    }
  }
}
</script>

<style>
</style>
