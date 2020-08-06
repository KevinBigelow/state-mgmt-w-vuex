<template>
    <button @click="addToCart()" class="button is-primary">Add to Cart</button>
</template>

<script>
import axios from '@/axios'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart () {
            axios.post('cart', this.product).then(() => {
                this.$emit('add-product-to-cart')
            })
        },
    }
}
</script>
