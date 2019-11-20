import Vue from 'vue';
import Vuex from 'vuex';
import Todo from './Modules/Todo';
import { CHECKTODOLIST } from './mutation-types';
import { queryTodoListData } from '../serves/todoServe';


Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    /* mutations:同步。actions:异步 */
    [CHECKTODOLIST](state, data) {
      state.list = data.list;
    },
  },
  actions: {
    async [CHECKTODOLIST]({ commit }, payload) {
      const { data } = await queryTodoListData(payload.url);
      commit(CHECKTODOLIST, data);
    },
  },
  modules: {
    Todo,
  },
});
