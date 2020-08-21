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
        getCartLength: (state, getters) => {
            return getters.getCart.length
        }
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
        async removeFromCart ({ commit }, id) {
            await axios.delete(`cart/${id}/`).then(() => {
                commit('removeProductFromCart', id)
            })
        }
    },
    mutations: {
        setCart: (state, cart) => (state.cart = cart),
        addProductToCart: (state, product) => state.cart.unshift(product),
        removeProductFromCart: (state, productId) => state.cart = state.cart.filter(product => product.id !== productId)
    }
})
