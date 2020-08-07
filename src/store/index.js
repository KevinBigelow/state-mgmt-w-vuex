import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: []
    },
    getters: {
        getCart: state => state.cart,
        getCartLength: state => state.cart.length
    },
    actions: {
        async fetchCart({ commit }) {
            await axios.get(`cart`).then(response => {
                commit('setCart', response.data)
            })
        },
        async addToCart ({ commit }, product) {
            await axios.post('cart', product).then(() => {
                commit('addProductToCart', product)
            })
        },
    },
    mutations: {
        setCart: (state, cart) => (state.cart = cart),
        addProductToCart: (state, product) => state.cart.unshift(product)
    }
})
