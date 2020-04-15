import Vue from "vue";
import Vuex from 'vuex';
import fakeApi from "../data/fakeApiCall";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: []
    }, //data
    getters: {}, //computed
    mutations: {
        SET_POSTS(state, payload){
            state.posts = payload;
        },
        ADD_POSTS(state, payload){
            state.posts = [...state.posts, payload];
        }
    }, //methods synchronous
    actions: {
        async fetchPosts({ commit }){
            const posts = await fakeApi.fetchData();
            commit("SET_POSTS", posts);
        },
        addPost({commit}, payload){
            commit('ADD_POSTS', payload)
        }
    }, //methods async
    modules: {} //different stores that communicate with each other

});

