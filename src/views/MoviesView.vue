<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <h1 class="display-5">Barbie Movie Library</h1>
      
      <!-- Sezione di Ricerca -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-6">
          <input 
            type="text" 
            class="form-control form-control-lg"
            placeholder="Search by title..."
            v-model="searchTerm"
          >
        </div>
      </div>
    </div>
    
    <!-- Griglia dei Film -->
    <div class="row">

      <!-- Mostra un messaggio se nessun film corrisponde alla ricerca -->
      <div v-if="filteredMovies.length === 0" class="col text-center">
        <p class="lead">No movies found matching your search. Try another keyword!</p>
      </div>

      <!-- Itera sulla lista di film FILTRATA -->
      <div v-for="movie in filteredMovies" :key="movie.id" class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="movie.poster" class="card-img-top" :alt="movie.title">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ movie.title }} ({{ movie.year }})</h5>
            <p class="card-text text-muted flex-grow-1">{{ movie.plot.substring(0, 100) }}...</p>
            <router-link :to="'/movies/' + movie.id" class="btn btn-primary mt-auto align-self-start">
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// Film verisini import ediyoruz
import { movies } from '@/data/movies.js';

// --- Variabili Reattive ---

// 'searchTerm' memorizza il testo digitato dall'utente nell'input di ricerca.
const searchTerm = ref('');

// 'movieList' contiene la lista completa e non modificata di tutti i film.
const movieList = ref(movies);

// --- Proprietà Computata per il Filtraggio ---

// 'filteredMovies' è una lista reattiva che viene calcolata automaticamente
// ogni volta che 'searchTerm' o 'movieList' cambiano.
const filteredMovies = computed(() => {
  // Se la barra di ricerca è vuota, restituisce la lista completa di tutti i film.
  if (!searchTerm.value) {
    return movieList.value;
  }

  // Se c'è del testo nella ricerca, filtra la lista.
  // toLowerCase() rende la ricerca insensibile alle maiuscole/minuscole.
  return movieList.value.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<style scoped>
/* Stili specifici per questa pagina */
h1 {
    color: var(--barbie-dark-pink);
    font-family: var(--font-heading);
}
.card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
}
.card-img-top {
  width: 100%;
  height: 450px;
  object-fit: contain;
  background-color: #fffafa;
  padding-top: 10px;
}
.card-title {
  color: var(--barbie-dark-pink);
  font-family: var(--font-heading);
}
.btn-primary {
    background-color: var(--barbie-pink);
    border-color: var(--barbie-pink);
}
.btn-primary:hover {
    background-color: var(--barbie-dark-pink);
    border-color: var(--barbie-dark-pink);
}
.form-control:focus {
  border-color: var(--barbie-pink);
  box-shadow: 0 0 0 0.25rem rgba(255, 105, 180, 0.25);
}
</style>