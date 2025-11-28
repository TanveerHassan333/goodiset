<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/global/Navbar.vue";
import Footer from "./components/global/Footer.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap");

body {
  font-family: "DM Sans", sans-serif;
}
</style>
