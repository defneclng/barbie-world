<template>
  <div class="movie-2023-section">
    <div class="container my-5">
      
      <!-- Sezione Cast e Galleria -->
      <section class="barbie-cast-gallery text-center">
        <h2 class="display-5">✨ Cast of Barbie (2023)</h2>
        <div class="row mt-4 align-items-center">
          
          <!-- Lista del Cast (colonna sinistra) -->
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

          <!-- Galleria del Cast (colonna destra) -->
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

      <!-- Sezione Trailer e Spotify -->
      <section class="barbie-trailer-spotify text-center">
        <h2 class="display-5">Soundtrack & Trailer</h2>
        <div class="row mt-4 justify-content-center g-4">
          
          <!-- Trailer di YouTube (colonna sinistra) -->
          <div class="col-lg-5">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/pBk4NYhWNMM" title="Barbie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded shadow"></iframe>
            </div>
          </div>

          <!-- Playlist di Spotify (colonna destra) -->
          <div class="col-lg-4">
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
  background-color: #ffffff; /* Sfondo bianco per far risaltare il contenuto */
  padding: 20px 0;
}
</style>