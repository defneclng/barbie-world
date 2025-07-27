<template>
  <div class="auth-page">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div class="text-center mb-4">
            <h1 class="display-5">Create an Account ✨</h1>
          </div>
          
          <!-- Gestione del form -->
          <form @submit.prevent="handleRegister" class="p-4 p-md-5 border rounded-3 bg-light">
            
            <!-- Mostra un messaggio di errore se esiste -->
            <div v-if="errorMessage" class="alert alert-danger">
              {{ errorMessage }}
            </div>

            <!-- Campo Username -->
            <div class="form-floating mb-3">
              <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" required>
              <label for="username">Username</label>
            </div>
            
            <!-- Campo Password -->
            <div class="form-floating mb-3">
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
              <label for="password">Password</label>
            </div>
            
            <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            <hr class="my-4">
            <p class="text-center">
              Already have an account? <router-link to="/login">Login here</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

// Inizializza gli hook necessari
const store = useStore();
const router = useRouter();

// Variabili reattive per i dati del form
const username = ref('');
const password = ref('');
const errorMessage = ref(''); // Per mostrare eventuali errori

// Funzione eseguita al submit del form
async function handleRegister() {
  try {
    // Esegue l'azione 'register' dello store con i dati dell'utente
    await store.dispatch('register', {
      username: username.value,
      password: password.value
    });
    
    // Se la registrazione ha successo, reindirizza alla pagina di login
    router.push('/login');

  } catch (error) {
    // Se lo store restituisce un errore (es. username già esistente), lo mostra
    errorMessage.value = error;
  }
}
</script>

<style scoped>
/* Stili specifici per questa pagina */
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
h1 {
    color: var(--barbie-dark-pink);
    font-family: var(--font-heading);
}
</style>