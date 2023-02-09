<template>
  <v-navigation-drawer app dark v-model="computedDrawer">
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
export default {
  props: ["drawer"],
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
    
  }),
    mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  computed: {
  computedDrawer: {
    get() {
      return this.drawer;
    },
    set (value) {
      this.$emit('update:drawer', value);
    }
  }
},
  methods: {
    
    checkScreenSize() {
      if (window.innerWidth < 960) {
        this.$emit('update:drawer', false);
      } else {
        this.$emit('update:drawer', true);
      }
    }
  }
};
</script>

<style>
</style>