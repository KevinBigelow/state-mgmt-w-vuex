<template>
  <div class="home">
    <p>Home</p>
    <cart-btn msg="123"></cart-btn>
  </div>
</template>

<script>
import cart from '@/components/Cart.vue'

export default {
  name: 'Home',
  components: {
    'cart-btn': cart
  }
}
</script>
