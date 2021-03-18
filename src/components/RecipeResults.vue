<template>
  <v-row class="justify-space-around ma-2">
    <div v-for="recipe in searchResults" :key="recipe.id" class="ma-2">
      <v-card width="350" height="100%">
        <v-img :src="recipe.image" width="350"></v-img>
        <v-card-title class="recipe-name">{{ recipe.title }}</v-card-title>

        <v-card-text>
          <v-row class="mb-1 ">
            <v-col md="4" cols="6">
              <v-icon class="mr-1">mdi-clock</v-icon>
              <span>{{ recipe.readyInMinutes }}min</span>
            </v-col>
            <v-col md="4" cols="6">
              <v-icon class="mr-1">mdi-silverware</v-icon>
              <span>Serves {{ recipe.servings }}</span></v-col
            >
          </v-row>
          <div class="mb-2 subtitle-1">
            <a :href="recipe.sourceUrl" target="_blank">View Full Recipe</a>
          </div>

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

<style>
.recipe-name {
  word-break: inherit;
}
</style>
