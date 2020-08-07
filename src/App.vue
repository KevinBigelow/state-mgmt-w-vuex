<template>
  <div id="app">
      <div class="level py-2 px-2 has-background-white-ter">
          <div class="level-left">
              <span class="title is-4">My Awesome Store</span>
          </div>
          <div class="level-right">
              <router-link :to="{name: 'Products'}" class="level-left button mr-2">View All Products</router-link>
              <cart-btn class="level-right"></cart-btn>
          </div>
      </div>
      <router-view/>
  </div>
</template>

<script>
import cartBtn from '@/components/CartButton.vue'

export default {
    components: {
        'cart-btn': cartBtn
    }
}
</script>

<style>
.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.products .product {
    width: 20%;
    margin-bottom: 1.5rem;
}
</style>
