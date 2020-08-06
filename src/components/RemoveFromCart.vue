<template>
    <button @click="removeFromCart(productId)" class="button is-danger">Remove from Cart</button>
</template>

<script>
import axios from '@/axios'

export default {
    props: {
        productId: {
            required: true
        }
    },
    methods: {
        async removeFromCart (id) {
            await axios.delete(`cart/${id}/`)
        }
    }
}
</script>
