<template>
  <v-app>
    <v-navigation-drawer v-if="isAuthenticated" v-model="showDrawer" class="blue-grey lighten-5" stateles value="true" fixed clipped>
      <v-list>
        <v-btn class="right" icon @click.stop="showDrawer = false">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-list-tile @click="dashboard()">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="settings">
          <v-list-tile slot="activator">
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>

          <v-list-group sub-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Permissions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="admin[2]">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
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

      <span class="user-name">{{userName}}</span>

      <v-icon>
        person
      </v-icon>

    </v-toolbar>
    <v-content>
      <router-view></router-view>
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
    <Snack v-bind:message="alertMessage" />
    <Dialog v-bind:confirm="confirmData" />
    <Loading />
  </v-app>
</template>

<script>
import store from '@/store/index'
import Snack from '@/components/Snack'
import Dialog from '@/components/Dialog'
import Loading from '@/components/Loading'

export default {
  name: 'app',
  store,
  components: {
    Snack,
    Dialog,
    Loading
  },
  data () {
    return {
      showDrawer: false,
      activeBtn: 1,
      showNav: true,
      showAlert: false,
      alertMessage: null,
      confirmData: null,
      admins: [
        ['Users', 'person', this.users],
        ['Roles', 'supervisor_account', this.roles]
      ],
    }
  },
  watch: {
    apiMessage () {
      this.alertMessage = this.apiMessage
    },
    apiError () {
      this.alertMessage = this.apiError ? this.apiError.data.error : ''
    },
    confirm () {
      this.confirmData = store.getters.confirm
    },
    isAuthenticated () {
      if (!this.isAuthenticated) {
        this.$router.push({ name: 'landing' })
      }
    }
  },
  computed: {
    apiMessage () {
      return store.getters.apiMessage
    },
    apiError () {
      return store.getters.apiError
    },
    confirm () {
      return store.getters.confirm
    },
    userName () {
      return store.getters.user.first
    },
    isAuthenticated () {
      return store.getters.isAuthenticated
    },
    appTitle () {
      return store.getters.appTitle
    }
  },
  methods: {
    dashboard () {
      this.showDrawer = false
      this.$router.push({ name: 'dashboard' })
    },
    logout () {
      this.showDrawer = false
      store.dispatch('logout')
    },
    showAlerts () {
      console.log('this show go show the list of alerts')
    },
    users () {
      this.showDrawer = false
      this.$router.push({ name: 'users' })
    },
    roles () {
      this.showDrawer = false
      this.$router.push({ name: 'roles' })
    }
  },
  created () {
    if (!this.isAuthenticated) {
      this.$router.push({ name: 'landing' })
    }
    this.confirmData = store.getters.confirm
  }
}
</script>

<style>
.user-name {
  margin-right: 14px;
}
</style>
