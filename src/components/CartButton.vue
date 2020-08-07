<template>
  <router-link :to="{name: 'Cart'}" class="button is-primary">
    Cart ({{count}})
  </router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count: 'getCartLength'
    })
  },
  methods: {
    ...mapActions({
      fetchCart: 'fetchCart'
    })
  },
  created () {
    this.fetchCart()
  }
}
</script>
