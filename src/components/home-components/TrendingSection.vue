<template>
  <section class="bg-[#FFFAFA] py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2
        class="font-[Caprasimo] text-[28px] md:text-[32px] lg:text-[36px] mb-16 text-[#303030]"
      >
        Can't Resist? See What's Trending Now! 🍭🔥
      </h2>
      <div
        class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-12"
      >
        <div
          v-for="(item, index) in candies"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden group-hover:scale-105 transition-transform"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-4 font-semibold text-[#303030]">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import polly from "@/assets/images/trending/polly.png";
import franssons from "@/assets/images/trending/fransons.png";
import candinavia from "@/assets/images/trending/candinavia.png";
import Grahns from "@/assets/images/trending/grahns.png";
import Maku_Laku from "@/assets/images/trending/maku-laku.png";
import notCreme from "@/assets/images/trending/not-creme.png";
import candie from "@/assets/images/trending/candie.png";
import molaco from "@/assets/images/trending/molaco.png";
const candies = [
  { name: "Cloetta", image: polly },
  { name: "Franssons", image: franssons },
  { name: "Candinavia", image: candinavia },
  { name: "Grahns", image: Grahns },
  { name: "Maku Laku", image: Maku_Laku },
  { name: "Not Creme", image: notCreme },
  { name: "Candie", image: candie },
  { name: "Molaco", image: molaco },
];
</script>
