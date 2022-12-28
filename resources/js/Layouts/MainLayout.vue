<template>
  <Link href="/listing">Listings</Link>&nbsp;
  <Link href="/listing/create">New Listing</Link>
  <Link href="/hello">Show Page</Link>
  <slot>Default</slot>
  <div v-if="flashSuccess" class="success">
    {{ flashSuccess }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/inertia-vue3'
// const x = ref(0)
// const y = computed(() => x.value * 2)
const page = usePage()
const flashSuccess = computed(
  () => page.props.value.flash.success,
)
</script>

<style scoped>
  .success {
    background-color: green;
    color: white;
  }
</style>
