import Vue from 'vue';
import Vuex from 'vuex';
import { CHECKTODOLIST } from '../mutation-types';
import { queryTodoListData } from '../../serves/todoServe';

Vue.use(Vuex);

const state = {
    list: [],
}

const mutation = {
    /* mutations:同步。actions:异步 */
    [CHECKTODOLIST](state, data) {
        state.list = data.list;
    },
}

const actions = {
    async [CHECKTODOLIST]({ commit }, payload) {
        const { data } = await queryTodoListData(payload.url);
        commit(CHECKTODOLIST, data);
    },
}

export default new Vuex.Store({
    namespaced: true,
    state,
    mutation,
    actions,
});
