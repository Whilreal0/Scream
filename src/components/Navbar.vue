<template>
  <nav>
    <v-app-bar color="blue" app dense>
      <v-app-bar-nav-icon
        class="pl-0"
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="h6 pa-0" link>
        <v-btn to="/" class="pa-0" plain text small><h1>Scream</h1></v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" to="/sign-in" small text>Sign In</v-btn>
      <v-btn to="/sign-up" small text>Sign Up</v-btn>
    </v-app-bar>

    <NavigationDrawer :value="drawerData" @update:value="updateDrawer" />
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavigationDrawer from "@/components/NavigationDrawer";
export default {
  components: { NavigationDrawer },
  data: () => ({
    drawer: true,
  }),
  computed: mapState({
    drawerData: (state) => state.drawerData,
  }),
  methods: {
    ...mapMutations({
      updateDrawer: "updateDrawer",
    }),
    checkScreenSize() {
      if (window.innerWidth < 600) {
        this.updateDrawer(false);
      }
    },
    toggleDrawer() {
      this.$store.commit("setDrawer", !this.$store.state.drawer);
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>


