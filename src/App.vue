<template>
  <v-app>
    <v-main>
      <v-app-bar app class="white--text deep-purple darken-2">
        <h3>Recipe Assistant</h3>
      </v-app-bar>

      <v-row class="ma-4">
        <v-col md="4" cols="12">
          <key-ingredients />
        </v-col>
        <v-col md="4" cols="12">
          <diet-select />
        </v-col>
        <v-col md="4" cols="12">
          <meal-type-select />
        </v-col>
      </v-row>
      <v-row class="justify-center my-3">
        <v-btn color="deep-purple accent-2" dark @click="getRandomRecipes"
          >Find Recipes</v-btn
        >
      </v-row>
      <recipe-results />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import DietSelect from "./components/DietSelect";
import KeyIngredients from "./components/KeyIngredients";
import MealTypeSelect from "./components/MealTypeSelect";
import RecipeResults from "./components/RecipeResults";

export default {
  name: "App",
  components: { RecipeResults, KeyIngredients, DietSelect, MealTypeSelect },
  methods: {
    ...mapActions(["getRandomRecipes"]),
  },

  data: () => ({
    //
  }),
};
</script>
