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
                <remove-from-cart :productId="product.id"></remove-from-cart>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/axios'
import removeFromCart from '@/components/RemoveFromCart'

export default {
    data () {
        return {
            cart: {}
        }
    },
    components: {
        'remove-from-cart': removeFromCart
    },
    methods: {
        async getCart() {
            await axios.get(`cart`).then(response => {
                this.cart = response.data
            })
        }
    },
    created () {
        this.getCart()
    }
}
</script>
