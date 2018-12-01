import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.counter++;
        },
        DECREMENT(state) {
            state.counter--;
        },
    },
    actions: {
        increment(obj) {
            obj.commit('INCREMENT');
        },
        decrement(obj) {
            obj.commit('DECREMENT');
        },
    },
});
