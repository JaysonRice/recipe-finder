<template>
  <v-app>
    <v-main>
      <h1>Recipe Helper</h1>
      <v-btn @click="getRandomRecipes">Find Recipes</v-btn>
      <recipe-results />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults";

export default {
  name: "App",
  components: { RecipeResults },
  methods: {
    ...mapActions(["getRandomRecipes"]),
  },

  data: () => ({
    //
  }),
};
</script>
