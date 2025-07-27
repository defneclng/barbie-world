<template>
  <div class="contact-view">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="text-center mb-4">
            <h1 class="display-5">Let's Stay in Touch 💌</h1>
            <p class="lead">
              Have a question or some feedback? Drop us a message!
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="Your Name" 
                required
              >
              <label for="name">Name</label>
            </div>

            <div class="form-floating mb-3">
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                placeholder="name@example.com" 
                required
              >
              <label for="email">Email address</label>
            </div>

            <div class="form-floating mb-3">
              <textarea 
                class="form-control" 
                placeholder="Leave a message here" 
                id="message" 
                style="height: 120px"
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
            
            <hr class="my-4">
            
            <small class="text-muted">We'll get back to you as soon as possible!</small>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function handleSubmit() {
  alert('Thank you for your message!');
}
</script>

<style scoped>
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