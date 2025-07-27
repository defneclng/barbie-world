<template>
  <!-- Bootstrap'in ana konteyner sınıfı, içeriği ortalar ve kenarlara boşluk bırakır -->
  <div class="container mt-5"> 
    <!-- Yeni bir satır başlatıyoruz -->
    <div class="row">
      
      <!-- Sol Sütun (Legacy): Orta ekranlarda 8 birim yer kaplayacak -->
      <div class="col-md-8">
        <section id="legacy-section">
          <h2>The Legacy of Barbie: More Than Just a Doll</h2>
          <p>Since her debut in 1959, Barbie has become more than just a toy—she's a cultural icon. Created by Ruth Handler and introduced by Mattel, Barbie was designed to inspire young girls by showing them they could be anything they dreamed of. Over the decades, Barbie has taken on countless roles, from astronaut to president, reflecting the evolving aspirations of society.</p>
          <p>While some debates over body image and gender roles have surrounded Barbie, her evolution proves she is more than a doll—she's a symbol of possibility, creativity, and empowerment for generations to come.</p>
        </section>
      </div>

      <!-- Sağ Sütun (Fun Facts): Orta ekranlarda 4 birim yer kaplayacak -->
      <div class="col-md-4">
        <aside class="fun-fact-aside p-3 rounded">
          <h3>Barbie History</h3>
          <p>Since 1959, Barbie has inspired generations of girls to dream big. From astronaut to president, Barbie has done it all!</p>
          <hr> <!-- Araya bir çizgi ekleyelim -->
          <h3>Barbie Fun Fact 💡</h3>
          <p>Did you know? Barbie's full name is Barbara Millicent Roberts!</p>
        </aside>
      </div>

    </div>
  </div>
</template>

<script setup>
// Bu bileşenin kendi içinde bir JavaScript mantığına ihtiyacı yok.
</script>

<style scoped>
/* Bu bileşene özel stiller */
.fun-fact-aside {
  background-color: var(--barbie-bg); /* Orijinal pembe arka planımızı koruyalım */
  border: 1px solid var(--barbie-border);
}
#legacy-section h2 {
    text-align: left; /* Başlığı sola yaslayalım, daha iyi durur */
}
</style>