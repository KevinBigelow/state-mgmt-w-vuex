<template>
    <div class="container">
        <h1 class="title has-text-centered">Your Cart</h1>
        <div class="products is-center">
            <div v-for="product in cart" :key="product.id" class="box mx-3 product">
                <figure class="image is-4by3 mb-5">
                    <img :src="product.image"/>
                </figure>
                <h1 class="title is-5 mb-5">{{product.name}}</h1>
                <p class="subtitle mb-4">${{product.price}}</p>
                <remove-from-cart :productId="product.id" v-on:remove-product-from-cart="onRemoveFromCart"></remove-from-cart>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import removeFromCart from '@/components/RemoveFromCart'

export default {
    computed: {
        ...mapGetters({
            cart: 'getCart'
        })
    },
    components: {
        'remove-from-cart': removeFromCart
    },
    methods: {
        ...mapActions({
            fetchCart: 'fetchCart'
        }),
        onRemoveFromCart (productId) {
            this.cart = this.cart.filter(product => product.id !== productId)
        }
    },
    created () {
        this.fetchCart()
    }
}
</script>
