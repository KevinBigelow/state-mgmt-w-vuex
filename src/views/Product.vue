<template>
    <section class="section">
        <div class="container box" style="max-width: 500px">
            <figure class="image is-4by3 mb-5">
                <img :src="product.image"/>
            </figure>
            <h1 class="title mb-5">{{product.name}}</h1>
            <p class="subtitle mb-1">{{product.description}}</p>
            <p class="subtitle has-text-weight-bold mb-4">${{product.price}}</p>
            <add-to-cart :product="product" v-on:add-product-to-cart="$emit('add-product-to-cart', product)"></add-to-cart>
        </div>
    </section>
</template>

<script>
import axios from '@/axios'
import addToCart from '@/components/AddToCart'

export default {
    data () {
        return {
            product: {}
        }
    },
    components: {
        'add-to-cart': addToCart
    },
    props: {
        id: {
            type: Number
        }
    },
    methods: {
        async getProduct(id) {
            await axios.get(`products/${id}/`).then(response => {
                this.product = response.data
            })
        }
    },
    created () {
        this.getProduct(this.id);
    }
}
</script>
