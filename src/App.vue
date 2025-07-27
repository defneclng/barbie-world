<template>
  <div id="app-wrapper">
    <AppHeader /> 
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
/* stili globali da aggiungere mi sa */
</style>