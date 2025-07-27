<template>
  <!-- Bootstrap'in "container" sınıfı ile bölümü sarmalayarak kenar boşlukları sağlıyoruz -->
  <div class="container my-5">
    <div id="barbieCarousel" class="carousel slide" data-bs-ride="carousel">
      
      <!-- Carousel Indicators (Alttaki küçük çizgiler) -->
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

      <!-- Carousel Inner (Resimlerin olduğu bölüm) -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.alt"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="slide.src" class="d-block w-100" :alt="slide.alt">
          <!-- İsteğe bağlı: Resim üzerine yazı eklemek istersen -->
          <!--
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.alt }}</h5>
          </div>
          -->
        </div>
      </div>

      <!-- Carousel Controls (Sol ve Sağ Oklar) -->
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

// Resim listemiz aynı kalıyor. Bootstrap bunu `v-for` ile kullanacak.
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

// Bootstrap Carousel, JavaScript mantığını kendi içinde halleder.
// Bu yüzden bizim artık currentIndex, nextSlide, prevSlide gibi
// değişkenlere ve fonksiyonlara ihtiyacımız YOK! Tertemiz bir <script> bölümü.
</script>

<style scoped>
/* Carousel'in kendisine hafif bir arka plan verelim */
#barbieCarousel {
  background-color: #fff0f5; /* Çok açık bir pembe */
  border-radius: 15px; /* Arka planın da kenarları yuvarlak olsun */
  padding: 10px; /* Resim ve kenarlar arasına boşluk */
}

.carousel-item img {
  height: 500px;
  object-fit: contain; /* DÜZELTME: Artık resmin tamamı görünecek */
  /* border-radius artık gereksiz, çünkü dış konteynerde var */
}

/* Küçük ekranlarda yüksekliği azaltalım */
@media (max-width: 768px) {
  .carousel-item img {
    height: 300px;
  }
}

/* Okların ve indikatörlerin arka plan rengini temamıza uygun hale getirelim */
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