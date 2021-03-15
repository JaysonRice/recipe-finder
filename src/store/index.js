import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiURL = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.VUE_APP_SPOONACULAR_KEY}`;

export default new Vuex.Store({
  state: {
    searchResults: [],
    ingredients: [],
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    addIngredient(state, payload) {
      state.ingredients.push(payload);
    },
    removeIngredient(state, payload) {
      state.ingredients = state.ingredients.filter((i) => {
        return i !== payload;
      });
    },
  },
  actions: {
    async getRandomRecipes({ getters, commit }) {
      const res = await fetch(getters.recipeURL);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    },
  },
  getters: {
    recipeURL({ ingredients }) {
      const tags = [...ingredients].join(",").toLowerCase();
      return `${apiURL}&tags=${tags}`;
    },
  },
  modules: {},
});
