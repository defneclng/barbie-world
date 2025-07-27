<template>
  <!-- Bootstrap "container" section -->
  <div class="container my-5">
    <div id="barbieCarousel" class="carousel slide" data-bs-ride="carousel">
      
      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#barbieCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>

      <!-- Carousel Inner -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.alt"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="slide.src" class="d-block w-100" :alt="slide.alt">
          <!--
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.alt }}</h5>
          </div>
          -->
        </div>
      </div>

      <!-- Carousel Controls (le frecce) -->
      <button class="carousel-control-prev" type="button" data-bs-target="#barbieCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#barbieCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const slides = ref([
  { src: '/images/barbie.jpg', alt: 'Bibble - Barbie Fairytopia' },
  { src: '/images/barbie4.jpg', alt: 'Barbie Doll' },
  { src: '/images/barbie2.jpg', alt: 'Barbie Image' },
  { src: '/images/barbie3.jpg', alt: 'Barbie Doll' },
  { src: '/images/barbie1.jpg', alt: 'Barbie (logo)' },
  { src: '/images/barbie6.jpg', alt: 'Barbie Doll' },
  { src: '/images/barbie9.jpg', alt: 'Barbie House' },
  { src: '/images/barbie5.jpg', alt: 'Barbie Doll' },
  { src: '/images/barbie8.jpg', alt: 'Barbie Cake' },
  { src: '/images/barbie7.jpg', alt: 'Barbie Doll' }
]);


</script>

<style scoped>

#barbieCarousel {
  background-color: #fff0f5; 
  border-radius: 15px;
  padding: 10px;
}

.carousel-item img {
  height: 500px;
  object-fit: contain; 
}


@media (max-width: 768px) {
  .carousel-item img {
    height: 300px;
  }
}


.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--barbie-dark-pink);
  border-radius: 50%;
  padding: 20px;
}

.carousel-indicators button {
  background-color: var(--barbie-pink) !important;
}
</style>