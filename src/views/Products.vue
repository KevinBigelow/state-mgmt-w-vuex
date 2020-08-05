<template>
  <div class="container">
    <h1 class="title has-text-centered">Products for Sale</h1>
    <div class="products is-center">
      <router-link :to="{name: 'Product', params: {id:product.id}}" v-for="product in products" :key="product.id" class="box mx-3 product">
        <figure class="image is-4by3 mb-5">
          <img :src="product.image"/>
        </figure>
        <h1 class="title mb-5">{{product.name}}</h1>
        <p class="subtitle has-text-weight-bold mb-4">${{product.price}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'Products',
  data () {
    return {
      products: {}
    }
  },
  created() {
    axios.get('products').then(response => {
      this.products = response.data
    });
  }
}
</script>
