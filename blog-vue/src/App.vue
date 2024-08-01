<script setup>
import Navbar from './components/Navbar.vue';
import Main from './components/layouts/Main.vue';
</script>

<template>
  <Main>
    <template #header>
      <Navbar />
    </template>

    <template #content>
      <RouterView />
    </template>

    <template #footer>
      
    </template>
  </Main>
</template>