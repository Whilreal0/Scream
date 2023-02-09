<template>
  <v-navigation-drawer app dark v-model="drawerData" :disable-resize-watcher="false">
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Random User</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: ["drawer"],
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
  computed: {
    ...mapState({
      drawerData: state => state.drawerData
    }),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    drawerData: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit('setDrawer', value);
      }
    }
    
  },
  watch: {
    isMobile() {
      this.checkScreenSize()
    }
  },
  mounted() {
    this.checkScreenSize()
  },
  methods: {
    checkScreenSize() {
      if (this.isMobile) {
        this.$store.commit('updateDrawer', false)
      } else {
        this.$store.commit('updateDrawer', true)
      }
    }
  }
};
</script>

<style>
</style>