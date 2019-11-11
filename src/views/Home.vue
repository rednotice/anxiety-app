<template>
  <div class="home">
      <h1>Home</h1>
      <v-row>
        <v-col class="d-flex flex-column">
          <v-btn outlined color="white" class="mt-2">White</v-btn>
          <v-btn outlined color="primary" class="mt-2">Primary</v-btn>
          <v-btn outlined color="secondary" class="mt-2">Secondary</v-btn>
          <v-btn outlined color="error" class="mt-2">Error</v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
