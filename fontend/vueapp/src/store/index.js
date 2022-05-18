import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import board from "./board";
import list from "./list";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    board,
    list,
  },
});
