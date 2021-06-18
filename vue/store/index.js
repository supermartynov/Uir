import Vue from 'vue'
import Vuex from 'vuex'
import specialties from "./specialties.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    specialties,
  },
});
