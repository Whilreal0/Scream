<template>
  <nav>
    <v-app-bar color="blue" app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span>Scream</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" to="/sign-in" small text>Sign In</v-btn>
      <v-btn to="/sign-up" small text>Sign Up</v-btn>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" />
  </nav>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
export default {
  components: { NavigationDrawer },
  data: () => ({
    drawer: true,
  }),
  
  
};
</script>


