<template>
  <v-app>
    <v-navigation-drawer v-model="showDrawer" class="blue-grey lighten-5" stateles value="true" fixed clipped>
      <v-list>
        <v-btn class="right" icon @click.stop="showDrawer = false">
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
          <v-list-group no-action sub-group value="true">
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="">
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
            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey" dark fixed app>
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>PH/GH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge>
        <span slot="badge" v-if="showBadge">0</span>
        <v-icon large @click="">
          mail
        </v-icon>
      </v-badge>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
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
export default {
  name: 'app',
  data () {
    return {
      showDrawer: false,
      activeBtn: 1,
      showNav: true,
      showBadge: false,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }
  }
}
</script>


<style>
</style>
