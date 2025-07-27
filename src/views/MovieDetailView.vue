<template>
  <div v-if="movie" class="container my-5">
    <div class="row g-5">
      <div class="col-md-5 text-center">
        <img :src="movie.poster" class="img-fluid rounded shadow-lg" :alt="movie.title">
      </div>
      <div class="col-md-7">
        <h1 class="display-4">{{ movie.title }}</h1>
        <h2 class="text-muted h4">{{ movie.year }}</h2>
        <hr class="my-4">
        <h3>Plot Summary</h3>
        <p class="lead">{{ movie.plot }}</p>
        <router-link to="/movies" class="btn btn-lg btn-outline-primary mt-4">
          ← Back to Movie List
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="container my-5 text-center">
    <h2 class="display-5">Movie Not Found!</h2>
    <p class="lead">We couldn't find the movie you were looking for.</p>
    <router-link to="/movies" class="btn btn-primary">Back to Movie List</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { movies } from '@/data/movies.js';

const route = useRoute();
const movie = ref(null);

function findMovie() {
  const movieId = Number(route.params.id);
  movie.value = movies.find(m => m.id === movieId);
}

onMounted(() => {
  findMovie();
});
</script>

<style scoped>
.img-fluid {
  max-height: 700px;
  object-fit: contain;
}
h1, h3 {
    color: var(--barbie-dark-pink);
    font-family: var(--font-heading);
}
.lead {
    font-size: 1.1rem;
    line-height: 1.6;
}
.btn-outline-primary {
    color: var(--barbie-pink);
    border-color: var(--barbie-pink);
}
.btn-outline-primary:hover {
    color: white;
    background-color: var(--barbie-dark-pink);
    border-color: var(--barbie-dark-pink);
}
</style>