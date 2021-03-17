<template>
  <v-card height="100%">
    <v-card-title class="white--text deep-purple accent-2"
      >Meal Type</v-card-title
    >
    <v-card-text class="mt-6">
      <v-chip-group :value="mealType" column active-class="light-blue--text">
        <v-chip
          :value="option"
          v-for="option in options"
          @click="selectMealType(option)"
          :key="option"
          filter
        >
          {{ option }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      options: ["Breakfast", "Lunch", "Main Course", "Side Dish", "Dessert"],
    };
  },
  computed: {
    ...mapState(["mealType"]),
  },
  methods: {
    ...mapMutations(["setMealType"]),

    selectMealType(chosenMealType) {
      if (this.mealType === chosenMealType) {
        this.setMealType(null);
      } else {
        this.setMealType(chosenMealType);
      }
    },
  },
};
</script>

<style></style>
