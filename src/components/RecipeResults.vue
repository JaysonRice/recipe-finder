<template>
  <v-row class="justify-space-around ma-2">
    <div v-for="recipe in searchResults" :key="recipe.id" class="ma-2">
      <v-card width="300" height="100%">
        <v-img :src="recipe.image" width="350"></v-img>
        <v-card-title>{{ recipe.title }}</v-card-title>

        <v-card-text>
          <p>{{ recipe.readyInMinutes }} minutes</p>
          <p>Serves {{ recipe.servings }}</p>
          <a :href="recipe.sourceUrl" target="_blank">View Full Recipe</a>
          <div><strong>Credits</strong>: {{ recipe.creditsText }}</div>
        </v-card-text>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchResults"]),
  },
};
</script>

<style></style>
