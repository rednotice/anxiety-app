<template>
  <div class="profile-edit">
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h2 class="mb-4 d-none d-md-block">Edit Profile</h2>
        <v-form ref="form" v-model="valid" lazy-validation cols="12" sm="6">
          <v-text-field
            v-model="user.name"
            :rules="nameRules"
            :error-messages="errors.name"
            label="Name"
            validate-on-blur
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            :error-messages="errors.email"
            label="E-mail"
            validate-on-blur
            required
          ></v-text-field>
          <div class="mt-4 d-flex justify-center">
            <v-btn
              color="white"
              tile
              outlined
              @click="validate"
            >
              Save Changes
            </v-btn>
          </div>
        </v-form>

        <!-- <v-btn 
          color="error"
          outlined
          class="mt-4"
          @click="deleteAccount"
        >
          Delete Account
        </v-btn> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'profileEdit',
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => /^[a-z0-9]+$/i.test(v) || 'Name must only contain letters (a-z) and numbers (0-9).',
      v => (v && v.length >= 3 && v.length <= 30) || 'Name must be between 3 and 30 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapState([
      'errors',
      'user'
    ])
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('editProfile', {
          name: this.user.name,
          email: this.user.email
        })
      }
    },
    deleteAccount() {
      this.$store.dispatch('deleteAccount');
    }
  }
}
</script>
