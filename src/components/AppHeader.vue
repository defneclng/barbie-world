<template>
  <header class="site-header">
    <div class="top-bar">
      <h1>Barbie World by Defne</h1>
    </div>

    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bottom-bar">
      <div class="container-fluid">
        
        <!-- Audio Player -->
        <div class="audio-player-container">
          <button @click="playAudio" class="player-btn">▶</button>
          <button @click="pauseAudio" class="player-btn">⏸</button>
          <span class="song-title">Barbie Girl 🎵</span>
          <audio ref="audioRef" src="/audio/Aqua - Barbie Girl.mp3" loop></audio>
        </div>

        <!-- Menu Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            
            <!-- menu -->
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/movies">Movies</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
            <li class="nav-item" v-if="isAuthenticated"><router-link class="nav-link" to="/chat">Chat</router-link></li>
            
            <!-- divisione -->
            <li class="nav-item d-none d-lg-block mx-2"><div class="vr text-white"></div></li>
            <hr class="d-lg-none">

            <!-- Login/Logout -->
            <template v-if="!isAuthenticated">
              <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
            </template>
            <li class="nav-item" v-if="isAuthenticated">
              <a href="#" @click.prevent="handleLogout" class="nav-link logout-btn">Logout</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </header>
  
  <div v-if="isAuthenticated && user" class="welcome-banner">
    Welcome, {{ user.username }}!
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const audioRef = ref(null);

const isAuthenticated = computed(() => store.getters.isAuthenticated);
const user = computed(() => store.state.user);

function playAudio() {
  if (audioRef.value) audioRef.value.play();
}
function pauseAudio() {
  if (audioRef.value) audioRef.value.pause();
}

function handleLogout() {
  store.dispatch('logout');
  router.push('/');
}
</script>

<style scoped>
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

/* Bootstrap Navbar */
.bottom-bar {
  background-color: var(--barbie-pink);
  padding: 5px 20px;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.navbar-dark .navbar-toggler {
    border-color: rgba(255,255,255,0.5);
}

/* Audio Player */
.audio-player-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.player-btn {
  background-color: var(--barbie-white);
  color: var(--barbie-dark-pink);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.song-title {
  color: white;
  font-weight: bold;
}

/* Logout Button */
.logout-btn {
    border: 2px solid white;
    padding: 5px 12px !important;
    border-radius: 8px;
    transition: background-color 0.2s, color 0.2s;
}

.logout-btn:hover {
    background-color: white;
    color: var(--barbie-dark-pink) !important;
}

/* Welcome Message */
.welcome-banner {
    background-color: var(--barbie-bg);
    color: var(--barbie-dark-pink);
    text-align: center;
    padding: 8px;
    font-weight: bold;
}
</style>