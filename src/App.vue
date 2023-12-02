<template>
  <navigation-bar></navigation-bar>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/navbar/NavigationBar.vue'

</script>

<style scoped>
</style>
