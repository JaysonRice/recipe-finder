<template>
  <v-card>
    <v-card-title class="white--text deep-purple accent-2"
      >Key Ingredients</v-card-title
    >
    <v-card-text>
      <div class="pb-6" v-if="ingredients.length">
        <v-chip-group column>
          <v-chip
            class="light-blue"
            dark
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

      <v-form @submit.prevent="submit" ref="ingredientForm">
        <v-text-field
          label="Add an ingredient"
          v-model="ingredient"
          color="light-blue"
          append-icon="mdi-plus-box"
          :rules="validators.ingredient"
          @click:append="submit"
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
      validators: {
        ingredient: [
          (val) => !!val || "Enter an ingredient",
          (val) =>
            !this.ingredients.includes(val) ||
            `${val} is already an ingredient`,
        ],
      },
    };
  },
  computed: {
    ...mapState(["ingredients"]),
  },
  methods: {
    ...mapMutations(["addIngredient", "removeIngredient"]),
    submit() {
      const isValid = this.$refs.ingredientForm.validate();
      if (!isValid) {
        // Form is not valid. Exit the method
        return;
      }
      this.addIngredient(this.ingredient);
      this.ingredient = "";
      this.$refs.ingredientForm.resetValidation();
    },
  },
};
</script>

<style></style>
