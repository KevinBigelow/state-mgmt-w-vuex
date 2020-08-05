<template>
  <router-link :to="{name: 'Cart'}" class="button is-primary">
    Cart ({{count}})
  </router-link>
</template>

<script>
export default {
  props: {
    count: Number
  }
}
</script>
