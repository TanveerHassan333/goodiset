<template>
  <section class="w-full bg-white px-4">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative bg-[#FFE8E8] rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[400px]"
      >
        <div
          class="absolute top-0 left-4 w-16 h-20 lg:w-20 lg:h-24 animate-float opacity-20 z-10"
          style="transform: rotate(55deg)"
        >
          <img
            src="@/assets/images/candy.png"
            alt="candy"
            class="w-full h-full object-contain"
          />
        </div>

        <div
          class="absolute -top-6 left-1/4 w-12 h-12 lg:w-16 lg:h-16 animate-float-delay-1 z-10"
        >
          <img src="@/assets/images/red-ball.png" alt="red ball" />
        </div>

        <div
          class="absolute bottom-20 left-[15%] w-14 h-14 lg:w-20 lg:h-20 animate-float-delay-2 opacity-60 z-10"
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 5 L48 25 L70 25 L52 38 L60 58 L40 45 L20 58 L28 38 L10 25 L32 25 Z"
              fill="#FFB6C1"
              opacity="0.8"
            />
          </svg>
        </div>

        <div
          class="absolute bottom-8 left-[60%] w-10 h-10 lg:w-14 lg:h-14 animate-float-delay-3 opacity-70 z-10"
        >
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="25" fill="#F5D76E" opacity="0.8" />
            <circle cx="30" cy="30" r="18" fill="#F0C440" opacity="0.6" />
          </svg>
        </div>
        <div
          class="relative z-20 grid lg:grid-cols-2 gap-8 items-center min-h-[400px] lg:min-h-[450px]"
        >
          <div class="px-8 py-12 lg:px-16 lg:py-20">
            <p
              class="text-[#E63946] font-semibold uppercase tracking-[0.2em] mb-3 text-xs lg:text-sm"
            >
              Events
            </p>

            <h1
              class="font-['Caprasimo'] font-semibold text-2xl md:text-[48px] text-[#2D2D2D] mb-6 leading-tight animate-slideIn"
            >
              Make Every Moment Sweeter with Goodiset! 🎉
            </h1>

            <p
              class="text-[#6E6E6E] mb-8 text-sm lg:text-base leading-relaxed max-w-md"
            >
              From Christmas to birthdays and beyond, we've got the perfect
              treats for every celebration.
            </p>

            <button
              @click="exploreCollections"
              class="px-8 py-3.5 rounded-lg bg-[#E92827] text-white font-semibold text-base shadow-lg transition-all duration-300 hover:bg-[#D62828] hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Explore Our Collections
            </button>
          </div>
          <div class="relative h-[300px] lg:h-full flex justify-end">
            <div class="relative w-full max-w-[500px] aspect-square">
              <div class="absolute inset-0 flex items-center justify-end">
                <img
                  src="@/assets/images/sweets.png"
                  class="h-full"
                  alt="sweets"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const exploreCollections = () => {
  console.log("Exploring Collections!");
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
h1 {
  font-family: "Caprasimo", serif;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes float-delay-1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(-3deg);
  }
}

@keyframes float-delay-2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(4deg);
  }
}

@keyframes float-delay-3 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-9px) rotate(-5deg);
  }
}

@keyframes float-delay-4 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-7px) rotate(3deg);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float-delay-1 4.5s ease-in-out infinite;
}

.animate-float-delay-2 {
  animation: float-delay-2 3.8s ease-in-out infinite;
}

.animate-float-delay-3 {
  animation: float-delay-3 4.2s ease-in-out infinite;
}

.animate-float-delay-4 {
  animation: float-delay-4 3.5s ease-in-out infinite;
}

.animate-slideIn {
  animation: slideIn 1s ease-out;
}
@media (max-width: 1023px) {
  .font-\[\'Ultra\'\] {
    line-height: 1.2;
  }
}
</style>
