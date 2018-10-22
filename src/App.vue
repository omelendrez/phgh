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
              <v-list-tile-title>Config</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(config, i) in configs" :key="i" @click="config[2]">
              <v-list-tile-title v-text="config[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="config[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Security</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(permission, i) in security" :key="i" @click="permission[2]">
              <v-list-tile-title v-text="permission[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="permission[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

        </v-list-group>

        <v-list-tile @click="audit()">
          <v-list-tile-action>
            <v-icon>security</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Audit</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" app dense dark>
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer" v-if="isAuthenticated"></v-toolbar-side-icon>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-badge v-if="showAlert && isAuthenticated">
        <v-icon @click="showAlerts" color="yellow">
          error
        </v-icon>
      </v-badge>

      <v-icon>
        person
      </v-icon>

      <span class="user-name">{{userName}}</span>

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
import store from '@/store'
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
      security: [
        ['Users', 'person', this.users],
        ['Roles', 'supervisor_account', this.roles]
      ],
      configs: [
        ['Main config', 'build', this.mainConfig],
        ['Finance Config', 'attach_money', this.financeConfig],
        ['PH Config', 'trending_up', this.PHConfig],
        ['GH Config', 'trending_down', this.GHConfig]
      ]
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
    audit() {
      this.showDrawer = false
      this.$router.push({ name: 'audit' })
    },
    showAlerts () {
      console.log('this show go show the list of alerts')  // eslint-disable-line no-console
    },
    users () {
      this.showDrawer = false
      this.$router.push({ name: 'users' })
    },
    roles () {
      this.showDrawer = false
      this.$router.push({ name: 'roles' })
    },
    mainConfig () {
      this.showDrawer = false
      this.$router.push({ name: 'mainConfig' })
    },
    PHConfig () {
      this.showDrawer = false
      this.$router.push({ name: 'PHConfig' })
    },
    financeConfig () {
      this.showDrawer = false
      this.$router.push({ name: 'financeConfig' })
    },
    GHConfig () {
      this.showDrawer = false
      this.$router.push({ name: 'GHConfig' })
    },
    logout () {
      this.showDrawer = false
      store.dispatch('logout')
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
body {
  font-family: Roboto;
}
</style>
