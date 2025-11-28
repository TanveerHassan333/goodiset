<template>
  <section
    class="relative w-full md:min-h-[90vh] min-h-[80vh] flex items-center hero-section md:py-0"
  >
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
      <div class="max-w-3xl text-white">
        <h1
          class="font-['Caprasimo'] md:font-extrabold font-semibold leading-tight text-3xl md:text-[64px] mb-6"
        >
          Get Your Favorite <br />
          Candies Delivered to <br />
          Your Door
        </h1>
        <p
          class="text-sm md:text-base lg:text-lg max-w-xl text-gray-100 leading-relaxed mb-8"
        >
          The taste of sweetness remains in your mouth when you have overcome
          all the difficulties and mistakes in your life, and revealed your
          truth.
        </p>
        <button
          class="bg-[#E92827] hover:bg-red-600 transition-all px-8 py-4 text-white font-semibold rounded-md shadow-lg"
        >
          Taste the Sweetness
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
.hero-section {
  background-image: url("@/assets/images/hero-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
h1 {
  font-family: "Caprasimo", serif;
}

</style>
