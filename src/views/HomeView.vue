<template>
  <div class="home-view">
    <HeroSection />
    <SlideshowSection />
    <MainContent /> 
    <Movie2023Section />
  </div>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue';
import SlideshowSection from '@/components/home/SlideshowSection.vue';
import MainContent from '@/components/home/MainContent.vue'; 
import Movie2023Section from '@/components/home/Movie2023Section.vue';
</script>