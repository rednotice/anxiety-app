<template>
  <div class="home">
      <h1>Home</h1>
      <v-row>
        <v-col class="d-flex flex-column">
          <v-btn outlined color="primary" class="mt-2">Primary</v-btn>
          <v-btn outlined color="secondary" class="mt-2">Secondary</v-btn>
          <v-btn outlined color="accent" class="mt-2">Accent</v-btn>
          <v-btn outlined color="error" class="mt-2">Error</v-btn>
          <v-btn outlined color="info" class="mt-2">Info</v-btn>
          <v-btn outlined color="success" class="mt-2">Success</v-btn>
          <v-btn outlined color="warning" class="mt-2">Warning</v-btn>
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
