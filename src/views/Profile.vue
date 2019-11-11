<template>
  <v-row class="profile" style="height: 100%;">
    <v-col cols="12" sm="6" class="d-flex flex-column align-center">
      <h2 class="d-none d-md-block">Profile</h2>

      <div class="d-flex flex-column align-center">
        <v-icon size="5rem">mdi-emoticon-cool-outline</v-icon>
        <span class="mt-3 headline">{{user.name}}</span>
        <div class="mt-3">
          <span class="mr-2">
            <v-icon>mdi-at</v-icon>
            {{user.email}}
          </span>
          <span>
            <v-icon>mdi-trophy</v-icon>
            {{user.rewardPoints}}
          </span>
        </div>
      </div>

      <v-btn class="mt-4" dark tile outlined small @click="editProfile">
        <v-icon class="mr-2">mdi-pencil</v-icon>
        edit profile
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'user',
    ])
  },
  created() {
    this.$store.dispatch('getProfile');
  },
  methods: {
    editProfile() {
      this.$router.push('profile/edit');
    }
  }
}
</script>