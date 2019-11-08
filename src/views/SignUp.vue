<template>
  <div class="signup">
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <h2 class="mb-4">Sign Up</h2>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy" cols="12" sm="6">
            <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="hidePassword? 'password' : 'text'"
                :append-icon="hidePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="hidePassword = !hidePassword"
                label="Password"
                required
              ></v-text-field>

              <div class="d-flex justify-center">
                <v-btn
                  :disabled="!valid"
                  color="secondary"
                  outlined
                  @click="validate"
                >
                  Sign Up
                </v-btn>
              </div>
          </v-form>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'signup',
  data: () => ({
      valid: true,
      lazy: true,
      name: '',
      email: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3 && v.length <= 30) || 'Name must be between 3 and 30 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      hidePassword: true
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signUp', {
          name: this.name,
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>
