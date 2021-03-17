<template>
  <v-app>
    <v-main>
      <h1>Recipe Helper</h1>
      <v-row class="ma-4">
        <v-col md="4" cols="12">
          <key-ingredients />
        </v-col>
        <v-col md="4" cols="12">
          <diet-select />
        </v-col>
      </v-row>
      <v-row class="justify-center mt-5">
        <v-btn @click="getRandomRecipes">Find Recipes</v-btn>
      </v-row>
      <recipe-results />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import DietSelect from "./components/DietSelect";
import KeyIngredients from "./components/KeyIngredients";
import RecipeResults from "./components/RecipeResults";

export default {
  name: "App",
  components: { RecipeResults, KeyIngredients, DietSelect },
  methods: {
    ...mapActions(["getRandomRecipes"]),
  },

  data: () => ({
    //
  }),
};
</script>
