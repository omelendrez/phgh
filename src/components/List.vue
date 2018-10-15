<template>
  <v-container>
    <v-list three-line>
      <template v-for="(item, index) in itemsList">
        <v-list-tile :key="index" avatar ripple @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-if="item.type==='switch'" color="blue" v-model="item.value"></v-switch>
            <v-text-field class="input-field" v-if="item.type==='text'" :mask="item.mask" :min="item.min" :suffix="item.suffix" :type="item.fieldType" v-model="item.value"></v-text-field>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'List',
  props: ['items'],
  watch: {
    items () {
      this.itemsList = this.items
    }
  },
  data: () => ({
    itemsList: []
  })
}
</script>
