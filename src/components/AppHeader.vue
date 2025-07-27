<template>
  <header class="site-header">
    <div class="top-bar">
      <h1>Barbie World by Defne</h1>
    </div>

    <!-- Menu, Sezione l'utente e Audio Player -->
    <div class="bottom-bar">
      <nav class="main-nav">
        <ul> 
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li v-if="isAuthenticated"><router-link to="/chat">Chat</router-link></li>
        </ul>
      </nav>

      <div class="user-area">
        <!-- Audio Player -->
        <div class="audio-player-container">
          <button @click="playAudio" class="player-btn">▶</button>
          <button @click="pauseAudio" class="player-btn">⏸</button>
          <audio ref="audioRef" src="/audio/Aqua - Barbie Girl.mp3" loop></audio>
        </div>

         <span class="song-title">Barbie Girl 🎵</span>

        <!-- Login/logout -->
        <nav class="auth-nav">
          <ul>
            <template v-if="!isAuthenticated">
              <li><router-link to="/register" class="auth-link">Register</router-link></li>
              <li><router-link to="/login" class="auth-link">Login</router-link></li>
            </template>
            <li v-if="isAuthenticated">
              <a href="#" @click.prevent="handleLogout" class="auth-link logout">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </header>
  
  <div v-if="isAuthenticated && user" class="welcome-banner">
    Welcome, {{ user.username }}!
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

// Inizializza gli hook necessari
const store = useStore();
const router = useRouter();
const audioRef = ref(null);

// Proprietà Computate
const isAuthenticated = computed(() => store.getters.isAuthenticated);
const user = computed(() => store.state.user);

// Metodi per Audio Player
function playAudio() {
  if (audioRef.value) audioRef.value.play();
}
function pauseAudio() {
  if (audioRef.value) audioRef.value.pause();
}

// Metodo per il Logout
function handleLogout() {
  store.dispatch('logout');
  router.push('/');
}
</script>

<style scoped>
/* Stili per il layout a due righe */
.site-header {
  color: white;
  text-align: center;
}

.top-bar {
  background-color: var(--barbie-dark-pink);
  padding: 20px 20px 10px 20px;
}

.top-bar h1 {
  margin: 0;
  font-size: 3.5rem;
  color: white;
  font-family: var(--font-heading);
  line-height: 1.2;
}

.bottom-bar {
  background-color: var(--barbie-pink);
  padding: 10px 30px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

.main-nav ul, .auth-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 25px;
}

.main-nav a, .auth-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.user-area {
  display: flex;
  align-items: center;
  gap: 20px;
}

.audio-player-container {
  display: flex;
  gap: 8px;
}

.song-title {
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  opacity: 0.9; 
  white-space: nowrap; 
}

.player-btn {
  background-color: var(--barbie-white);
  color: var(--barbie-dark-pink); 
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 14px; 
  font-weight: bold;
  
  /* flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: transform 0.2s;
}

.player-btn:hover {
    transform: scale(1.1);
}

.auth-link.logout {
    border: 2px solid white;
    padding: 5px 12px;
    border-radius: 8px;
    transition: background-color 0.2s, color 0.2s;
}

.auth-link.logout:hover {
    background-color: white;
    color: var(--barbie-dark-pink);
}

.welcome-banner {
    background-color: var(--barbie-bg);
    color: var(--barbie-dark-pink);
    text-align: center;
    padding: 8px;
    font-weight: bold;
}

@media (max-width: 992px) {
  .bottom-bar {
    flex-direction: column; 
    gap: 15px; 
    padding: 15px;
  }

  .top-bar h1 {
    font-size: 2.5rem; 
  }

  .main-nav ul {
      gap: 15px;
  }
}

@media (max-width: 576px) {
  .top-bar h1 {
    font-size: 2rem; 
  }

  .main-nav ul {
    flex-direction: column; 
    gap: 10px;
  }

  .user-area {
    flex-direction: column; 
    gap: 15px;
  }

  .bottom-bar {
    gap: 20px;
  }
}
</style>