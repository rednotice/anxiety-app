<template>
  <div class="profile">
      <h1>Profile</h1>
      <div class="d-flex flex-column">
        <span>{{user.name}}</span>
        <span>{{user.email}}</span>
        <span>{{user.rewardPoints}}</span>
        <span>{{user.isSubscribed}}</span>
      </div>
      <div class="d-flex flex-column">
        <v-btn 
          color="primary"
          outlined
          class="mt-4"
          @click="editProfile"
        >
          Edit Profile
        </v-btn>
        <v-btn 
          color="error"
          outlined
          class="mt-4"
          @click="deleteAccount"
        >
          Delete Account
        </v-btn>
      </div>
  </div>
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
    },
    deleteAccount() {
      this.$store.dispatch('deleteAccount');
    }
  }
}
</script>