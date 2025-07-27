<template>
  <div class="movie-2023-section">
    <div class="container my-5">
      
      <!-- Sezione Cast e Galleria -->
      <section class="barbie-cast-gallery text-center mb-5">
        <h2 class="display-5">✨ Cast of Barbie (2023)</h2>
        <div class="row mt-4 align-items-center">
          <div class="col-md-5">
            <ul class="cast-list list-unstyled text-start">
              <li>🎀 Margot Robbie – Barbie</li>
              <li>🎩 Ryan Gosling – Ken</li>
              <li>👓 America Ferrera – Gloria</li>
              <li>🎭 Kate McKinnon – Weird Barbie</li>
              <li>🎤 Dua Lipa – Mermaid Barbie</li>
              <li>🎬 Will Ferrell – Mattel CEO</li>
            </ul>
          </div>
          <div class="col-md-7">
            <div class="row g-3">
              <div class="col-4"><img src="/images/margot.jpg" alt="Margot Robbie" class="img-fluid rounded shadow-sm"></div>
              <div class="col-4"><img src="/images/gosling.jpg" alt="Ryan Gosling" class="img-fluid rounded shadow-sm"></div>
              <div class="col-4"><img src="/images/ferrera.jpg" alt="America Ferrera" class="img-fluid rounded shadow-sm"></div>
              <div class="col-4"><img src="/images/kate.jpg" alt="Kate McKinnon" class="img-fluid rounded shadow-sm"></div>
              <div class="col-4"><img src="/images/dua.jpg" alt="Dua Lipa" class="img-fluid rounded shadow-sm"></div>
              <div class="col-4"><img src="/images/ferrell.jpg" alt="Will Ferrell" class="img-fluid rounded shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-5">

      <!-- Sezione Trailer e Spotify con Flexbox -->
      <section class="trailer-spotify-section">
        <h2 class="display-5 text-center">Soundtrack & Trailer</h2>
        
        <!-- Contenitore Flexbox per centrare i player -->
        <div class="players-container mt-4">
          <div class="player-item">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/pBk4NYhWNMM" title="Barbie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded shadow"></iframe>
            </div>
          </div>
          <div class="player-item">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0wIBbVnPvie?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="shadow"></iframe>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
// Questo componente non necessita di logica JavaScript specifica.
</script>

<style scoped>
/* Stili per la sezione Cast (invariati) */
.cast-list li {
  font-size: 1.1rem;
  margin-bottom: 10px;
  background-color: var(--barbie-bg);
  padding: 8px 12px;
  border-radius: 8px;
}
h2 {
  font-family: var(--font-heading);
  color: var(--barbie-dark-pink);
}
.movie-2023-section {
  background-color: #ffffff;
  padding: 20px 0;
}

/* === LA SEZIONE TRAILER & SPOTIFY === */
.players-container {
  display: flex; /* Abilita Flexbox */
  justify-content: center; /* Centra gli elementi orizzontalmente */
  align-items: center; /* Allinea gli elementi verticalmente */
  gap: 30px; /* Spazio tra i due player */
  flex-wrap: wrap; /* Permette ai player di andare a capo su schermi piccoli */
}

.player-item {
  flex-basis: 400px; /* Larghezza di base per ogni player */
  max-width: 100%; /* Assicura che non superi la larghezza dello schermo */
}

/* Assicura che l'iframe di Spotify abbia una larghezza massima */
.player-item iframe {
    max-width: 400px;
}
</style>