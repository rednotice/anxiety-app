<template>
  <v-row class="challenge" justify="center">
    <v-col cols="12" sm="6">
      <div class="challenge-box d-flex flex-column align-center">

        <div class="d-flex justify-space-between" style="width: 100%;">
          <v-btn
            text
            small
            color="secondary"
            @click="getEasierChallenge"
          >
            <v-icon>mdi-arrow-down-bold</v-icon>
            Too hard
          </v-btn>

          <v-btn
            text
            small
            color="secondary"
            @click="getHarderChallenge"
          >
            <v-icon>mdi-arrow-up-bold</v-icon>
            Too easy
          </v-btn>
        </div>

        <p class="mt-5 display-1 white--text">{{ challenge }}</p>

        <v-btn 
          class="mt-4"
          dark
          tile
          outlined
          color="primary"
          @click="accomplishChallenge"
        >
          <v-icon class="mr-2">mdi-check-bold</v-icon>
          Done!
        </v-btn>

      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'challenge',
  data: () => ({
  }),
  computed: {
    challenge() {
      return this.$store.getters.challenge;
    }
  },
  methods: {
    accomplishChallenge() {
      this.$store.dispatch('accomplishChallenge');
    },
    getEasierChallenge() {
      this.$store.dispatch('getEasierChallenge');
    },
    getHarderChallenge() {
      this.$store.dispatch('getHarderChallenge');
    }
  },
  created() {
    this.$store.dispatch('getChallenge');
  }
}
</script>