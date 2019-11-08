<template>
  <v-app id="anxiety">

    <app-navbar></app-navbar>

    <v-content class="background darken-3 white--text">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-bottom-navigation v-if="loggedIn"></app-bottom-navigation>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
    'appNavbar': Navbar,
    'appBottomNavigation': BottomNavigation
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title + ' | AnxietyApp' || 'AnxietyApp'
    }
  },
}
</script>

<style scoped>
</style>