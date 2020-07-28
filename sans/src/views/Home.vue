<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cart></cart>
  </div>
</template>

<script>
import cart from '@/components/Cart.vue'

export default {
  name: 'Home',
  components: [cart]
}
</script>
