<template>
  <!-- Bootstrap container -->
  <div class="container mt-5"> 
    <div class="row">
      
      <!-- Sinistra (Legacy) -->
      <div class="col-md-8">
        <section id="legacy-section">
          <h2>The Legacy of Barbie: More Than Just a Doll</h2>
          <p>Since her debut in 1959, Barbie has become more than just a toy—she's a cultural icon. Created by Ruth Handler and introduced by Mattel, Barbie was designed to inspire young girls by showing them they could be anything they dreamed of. Over the decades, Barbie has taken on countless roles, from astronaut to president, reflecting the evolving aspirations of society.</p>
          <p>While some debates over body image and gender roles have surrounded Barbie, her evolution proves she is more than a doll—she's a symbol of possibility, creativity, and empowerment for generations to come.</p>
        </section>
      </div>

      <!-- Destra (Fun Facts) -->
      <div class="col-md-4">
        <aside class="fun-fact-aside p-3 rounded">
          <h3>Barbie History</h3>
          <p>Since 1959, Barbie has inspired generations of girls to dream big. From astronaut to president, Barbie has done it all!</p>
          <hr> <!-- per dividere -->
          <h3>Barbie Fun Fact 💡</h3>
          <p>Did you know? Barbie's full name is Barbara Millicent Roberts!</p>
        </aside>
      </div>

    </div>
  </div>
</template>

<script setup>
// non ce bisogno di javascript
</script>

<style scoped>
.fun-fact-aside {
  background-color: var(--barbie-bg); 
  border: 1px solid var(--barbie-border);
}
#legacy-section h2 {
    text-align: left; 
}
</style>