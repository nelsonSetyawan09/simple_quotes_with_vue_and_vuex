import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        quotes:['simple quotes 1'],
        quote:'',
        maxQuotes:10,


    },
    getters:{
        getQuotes: state =>{
            return state.quotes;
        }
    },
    mutations:{
        'ADD_QUOTE'(state,quote){
            state.quotes.push(quote);
        },
        'DELETE_QUOTE'(state, index){
            state.quotes.splice(index,1);
        }
    },
    actions:{
        addQuote({commit},quote){
            commit('ADD_QUOTE', quote);
        },
        deleteQuote({commit},index){
            commit('DELETE_QUOTE', index);
        }
    }
})
