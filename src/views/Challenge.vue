<template>
  <div class="challenge">
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <div class="challenge-box d-flex flex-column align-center">
            <p class="display-1">{{ challenge }}</p>
            <v-btn 
              color="primary"
              outlined
              class="mt-4"
              @click="accomplishChallenge"
            >
                I accomplished this challenge!
            </v-btn>
          </div>

          <div class="d-flex justify-space-between">
            <v-btn 
              color="secondary"
              outlined
              class="mt-4"
              @click="getHarderChallenge"
            >
                Too easy
            </v-btn>

            <v-btn 
              color="primary"
              outlined
              class="mt-4"
              @click="getEasierChallenge"
            >
                Too hard
            </v-btn>
          </div>




        </v-col>
      </v-row>
  </div>
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