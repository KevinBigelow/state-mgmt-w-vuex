<template>
    <button @click="removeFromCart(productId)" class="button is-danger">Remove from Cart</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        productId: {
            required: true
        }
    },
    methods: {
        ...mapActions({
            removeFromCart: 'removeFromCart'
        })
    }
}
</script>
