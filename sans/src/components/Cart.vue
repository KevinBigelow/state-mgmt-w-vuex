<template>
  <button class="button is-primary">
    {{msg}}
  </button>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
