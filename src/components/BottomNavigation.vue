<template>
    <v-bottom-navigation app light color="primary">
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
