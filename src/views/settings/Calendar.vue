<template>
  <v-container>

    <v-calendar @dayclick='dayClicked' :attributes='attrs' is-double-paned is-linked>
    </v-calendar>

    <v-dialog v-model="dialog" width="300" persistent>
      <v-card>
        <v-card-title class="headline blue-grey white--text" primary-title>
          {{title}}
        </v-card-title>
        <v-card-text>
          <v-text-field required v-model="holidayName" placeholder="Enter holiday name">
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat @click="save">
            Save
          </v-btn>
          <v-btn v-if="editing" color="red" flat @click="remove">
            Delete
          </v-btn>
          <v-btn color="#344955" flat @click="close">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import store from '@/store'

export default {
  name: 'Calendar',
  store,
  data: () => ({
    selectedDate: new Date(),
    holidayName: null,
    dialog: false,
    title: null,
    date: null,
    id: null,
    editing: false,
    attrs: []
  }),
  watch: {
    holiday () {
      this.dialog = false
      store.dispatch('loadHolidays')
    },
    holidays () {
      this.attrs = []
      const holidays = this.holidays
      holidays.map(item => {
        const date = {
          key: `${item.id}`,
          dates: item.date,
          highlight: {
            backgroundColor: '#ff0266',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          // Our new popover here
          popover: {
            label: item.title,
          }
        }
        this.attrs.push(date)
      })
    }
  },
  computed: {
    holidays () {
      return store.getters.holidays
    },
    holiday () {
      return store.getters.holiday
    }
  },
  created () {
    store.dispatch('setAppTitle', 'Calendar')
    store.dispatch('loadHolidays')
  },
  methods: {
    close () {
      this.dialog = false
      this.holidayName = null
    },
    save () {
      const payload = {
        id: this.id,
        date: this.date,
        title: this.holidayName
      }
      const action = this.editing ? 'updateHoliday' : 'saveHoliday'
      store.dispatch(action, payload)
    },
    remove () {
      const payload = {
        id: this.id,
        date: this.date
      }
      store.dispatch('deleteHoliday', payload)
    },
    dayClicked (e) {
      const attr = e.attributes[0]
      if (attr) {
        this.holidayName = attr.popover.label
        this.editing = attr.popover.label
        this.id = attr.key
      } else {
        this.id = null
        this.editing = false
      }
      this.title = this.pad(e.day, 2) + '-' + this.pad(e.month, 2) + '-' + e.year
      this.date = e.year + '-' + this.pad(e.month, 2) + '-' + this.pad(e.day, 2)
      this.dialog = true
    },
    pad (n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
  }
}

</script>

<style scoped>
</style>

