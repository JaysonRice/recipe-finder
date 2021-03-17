<template>
  <v-card>
    <v-card-title class="white--text purple lighten-1"
      >Key Ingredients</v-card-title
    >
    <v-card-text>
      <div class="pb-6" v-if="ingredients.length">
        <v-chip-group column>
          <v-chip
            v-for="ingredient in ingredients"
            close
            @click:close="removeIngredient(ingredient)"
            :key="ingredient"
          >
            {{ ingredient }}
          </v-chip>
        </v-chip-group>
      </div>
      <v-card-subtitle v-else>
        <em>No ingredients yet</em>
      </v-card-subtitle>

      <v-form @submit.prevent="submit">
        <v-text-field
          label="Add an ingredient"
          v-model="ingredient"
        ></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      ingredient: "",
    };
  },
  computed: {
    ...mapState(["ingredients"]),
  },
  methods: {
    ...mapMutations(["addIngredient", "removeIngredient"]),
    submit() {
      this.addIngredient(this.ingredient);
      this.ingredient = "";
    },
  },
};
</script>

<style></style>
