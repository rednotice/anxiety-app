<template>
    <v-bottom-navigation app grow dark background-color="base">
      <v-btn :to="'/profile'">Profile</v-btn>
      <v-btn :to="'/challenge'">Challenge</v-btn>
      <v-btn>Bonus</v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'BottomNavigation',
}
</script>
