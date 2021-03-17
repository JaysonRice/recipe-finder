<template>
  <v-card height="100%">
    <v-card-title class="white--text purple lighten-1">Diets</v-card-title>
    <v-card-text class="mt-6">
      <v-chip-group multiple column active-class="purple--text">
        <v-chip
          v-for="option in options"
          @click="toggle(option)"
          :value="option"
          :key="option"
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
      options: [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Vegan",
        "Pescatarian",
        "Paleo",
        "Whole30",
      ],
    };
  },
  computed: {
    ...mapState(["diets"]),
  },
  methods: {
    ...mapMutations(["addDiet", "removeDiet"]),

    toggle(diet) {
      const alreadyChosen = this.diets.some((d) => d === diet);

      if (alreadyChosen) {
        this.removeDiet(diet);
      } else {
        this.addDiet(diet);
      }
    },
  },
};
</script>

<style></style>
