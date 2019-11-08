<template>
  <div class="profile-edit">
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h2 class="mb-4">Edit Profile</h2>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy" cols="12" sm="6">
          <v-text-field
            v-model="user.name"
            :rules="nameRules"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn
              :disabled="!valid"
              color="secondary"
              outlined
              @click="validate"
            >
              Save Changes
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profileEdit',
  data: () => ({
    valid: true,
    lazy: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3 && v.length <= 30) || 'Name must be between 3 and 30 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapGetters([
      'user'
    ]),
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('editProfile', {
          name: this.user.name,
          email: this.user.email
        })
      }
    }
  }
}
</script>
