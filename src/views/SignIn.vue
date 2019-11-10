<template>
  <div class="signin">
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <h2 class="mb-4">Sign In</h2>
          <v-form ref="form" v-model="valid" lazy-validation cols="12" sm="6">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                :error-messages="errors.email"
                label="E-mail"
                validate-on-blur
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :error-messages="errors.password"
                :type="hidePassword? 'password' : 'text'"
                :append-icon="hidePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="hidePassword = !hidePassword"
                label="Password"
                validate-on-blur
                required
              ></v-text-field>

              <div class="d-flex justify-center">
                <v-btn
                  color="secondary"
                  outlined
                  @click="validate"
                >
                  Sign In
                </v-btn>
              </div>
          </v-form>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'signin',
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    hidePassword: true
  }),
  computed: {
    ...mapState([
      'errors'
    ])
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signIn', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>
