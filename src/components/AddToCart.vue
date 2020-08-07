<template>
    <button @click="addToCart(product)" class="button is-primary">Add to Cart</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            addToCart: 'addToCart'
        })
    }
}
</script>
