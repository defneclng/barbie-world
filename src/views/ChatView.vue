<template>
  <div class="chat-view">
    <div class="container my-5">
      <div class="text-center mb-4">
        <h1 class="display-5">Barbie World Chat 💬</h1>
        <p class="lead" v-if="user">
          Welcome, {{ user.username }}! Join the conversation.
        </p>
      </div>

      <!-- Contenitore della Chat -->
      <div class="chat-container p-3 border rounded-3 bg-light">
        
        <!-- Area Messaggi -->
        <div class="messages-area mb-3 p-3 bg-white rounded">
          <div v-if="allMessages.length === 0" class="text-center text-muted">
            No messages yet. Be the first to say hi!
          </div>
          <!-- Itera su tutti i messaggi nello store -->
          <div v-for="message in allMessages" :key="message.id" class="message mb-2">
            <strong :style="{ color: message.username === user.username ? 'var(--barbie-dark-pink)' : 'black' }">
              {{ message.username }}:
            </strong>
            <span>{{ message.text }}</span>
            <small class="text-muted float-end">{{ formatTimestamp(message.timestamp) }}</small>
          </div>
        </div>

        <!-- Form per Inviare un Messaggio -->
        <form @submit.prevent="sendMessage" class="d-flex gap-2">
          <input 
            v-model="newMessage"
            type="text" 
            class="form-control" 
            placeholder="Type your message..."
          >
          <button class="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

// Inizializza gli hook necessari
const store = useStore();

// Variabile reattiva per il nuovo messaggio
const newMessage = ref('');

// === PROPRIETÀ COMPUTATE ===
// Si collegano ai getter e allo state dello store
const allMessages = computed(() => store.getters.allMessages);
const user = computed(() => store.state.user);

// === METODI ===
// Funzione per inviare un nuovo messaggio
function sendMessage() {
  // Non inviare se il messaggio è vuoto
  if (newMessage.value.trim() === '') return;
  
  // Esegue l'azione 'postMessage' dello store
  store.dispatch('postMessage', newMessage.value);
  
  // Pulisce l'input dopo l'invio
  newMessage.value = '';
}

// Funzione per formattare il timestamp
function formatTimestamp(date) {
    return new Date(date).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
}
</script>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: auto;
}
.messages-area {
  height: 50vh;
  overflow-y: auto; /* Abilita lo scroll verticale se i messaggi superano l'altezza */
}
.message strong {
  font-family: var(--font-heading);
}
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