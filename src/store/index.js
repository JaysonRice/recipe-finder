import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: [],
  },
  mutations: {
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
  },
  actions: {
    async getRandomRecipes({ commit }) {
      const apiKey = process.env.VUE_APP_SPOONACULAR_KEY;
      const random3url = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`;
      // Payload parameter will be the search term later
      const res = await fetch(random3url);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    },
  },
  modules: {},
});
