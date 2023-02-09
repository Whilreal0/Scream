<template>
  <v-container>
    <ScreamIntro/>
    <!-- <Sign-in/> -->
  </v-container>
</template>

<script>
import ScreamIntro from '@/components/ScreamIntro';
// import SignIn from '@/components/SignIn';
export default {
  name: "Home",

  components: {
    ScreamIntro,
    // SignIn
  },
};
</script>
