<template>
  <div class="auth-page">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div class="text-center mb-4">
            <h1 class="display-5">Welcome Back! 💖</h1>
          </div>

          <!-- Gestione del form di login -->
          <form @submit.prevent="handleLogin" class="p-4 p-md-5 border rounded-3 bg-light">
            
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
            
            <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <hr class="my-4">
            <p class="text-center">
              Don't have an account? <router-link to="/register">Register now</router-link>
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
async function handleLogin() {
  try {
    // Esegue l'azione 'login' dello store con le credenziali
    await store.dispatch('login', {
      username: username.value,
      password: password.value
    });

    // Se il login ha successo, reindirizza alla pagina principale
    router.push('/');

  } catch (error) {
    // Se lo store restituisce un errore (es. credenziali non valide), lo mostra
    errorMessage.value = error;
  }
}
</script>

<style scoped>
/* Stili identici alla pagina di registrazione */
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