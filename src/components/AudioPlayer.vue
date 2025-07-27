<template>
  <div class="barbie-audio-bar">
    <h3>Barbie Girl 🎵</h3>
    <div class="barbie-buttons">
      <button @click="playAudio">▶</button>
      <button @click="pauseAudio">⏸</button>
    </div>
    <audio ref="audioPlayer" src="/audio/Aqua - Barbie Girl.mp3" loop></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// L'elemento audio del DOM
const audioPlayer = ref(null);

// Funzione per avviare la riproduzione
function playAudio() {
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }
}

// Funzione per mettere in pausa la riproduzione
function pauseAudio() {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
}
</script>

<style scoped>
/* Stili per il player audio (identici a quelli in styles.css) */
.barbie-audio-bar {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
    padding: 8px;
    border-radius: 50px;
    z-index: 1001;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 12px;
}
.barbie-audio-bar h3 {
    margin: 0;
    font-size: 15px;
    color: var(--barbie-dark-pink);
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);
}
.barbie-buttons {
    display: flex;
    gap: 8px;
}
.barbie-buttons button {
    background-color: var(--barbie-pink);
    color: var(--barbie-white);
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}
.barbie-buttons button:hover {
    background-color: var(--barbie-dark-pink);
    transform: scale(1.1);
}
</style>