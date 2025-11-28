<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-white lg:mt-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-start mb-4">
        <h2
          class="font-['Caprasimo'] md:text-start text-center text-2xl sm:text-5xl md:text-[40px] text-[#E92827] mb-12 animate-fadeInDown"
        >
          Gift Boxes
        </h2>
      </div>
      <div class="relative">
        <div class="swiper gift-box-swiper">
          <div class="swiper-wrapper">
            <div v-for="box in giftBoxes" :key="box.id" class="swiper-slide">
              <div class="bg-white overflow-hidden duration-300">
                <div class="relative aspect-square overflow-hidden">
                  <img
                    :src="box.image"
                    :alt="box.title"
                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    class="absolute top-4 right-4 bg-[#E92827] text-white px-3 py-1.5 rounded-full text-xs font-bold"
                  >
                    {{ box.discount }}
                  </div>
                </div>
                <div class="p-4 md:p-5 md:text-start text-center mb-2">
                  <p class="text-md font-semibold text-[#303030] leading-tight">
                    {{ box.title }}
                  </p>

                  <div
                    class="flex md:justify-start justify-center items-center space-x-2 mb-2"
                  >
                    <div class="flex">
                      <span v-html="StarRating({ rating: box.rating })"></span>
                    </div>
                    <span class="text-md text-gray-500 font-medium"
                      >({{ box.numReviews }})</span
                    >
                  </div>

                  <div
                    class="flex flex-col sm:flex-row md:justify-start justify-center items-center space-x-0 sm:space-x-3 mb-4"
                  >
                    <p
                      class="text-md font-semibold text-[#303030] leading-none"
                    >
                      {{ box.price }} AED
                    </p>
                    <div class="flex items-center space-x-1 mt-1 sm:mt-0">
                      <p
                        class="text-sm text-[#303030] line-through leading-none"
                      >
                        {{ box.originalPrice }} AED
                      </p>
                      <p
                        class="text-sm font-semibold text-[#FE0C0A] leading-none"
                      >
                        ({{ box.discount }})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gift from "@/assets/images/gift.png";
const giftBoxes = ref([
  {
    id: 1,
    image: gift,
    title: "Birthday Gift Box",
    price: 2499,
    rating: 4,
    numReviews: 3,
    originalPrice: 4199,
    discount: "40% off",
  },
  {
    id: 2,
    image: gift,
    title: "Wedding Gift Box",
    rating: 4,
    numReviews: 3,
    price: 3499,
    originalPrice: 5799,
    discount: "40% off",
  },
  {
    id: 3,
    image: gift,
    title: "Anniversary Gift Box",
    rating: 4,
    numReviews: 3,
    price: 2999,
    originalPrice: 4999,
    discount: "40% off",
  },
  {
    id: 4,
    image: gift,
    title: "Corporate Gift Box",
    rating: 4,
    numReviews: 3,
    price: 3999,
    originalPrice: 6699,
    discount: "40% off",
  },
  {
    id: 5,
    image: gift,
    title: "Festival Gift Box",
    rating: 4,
    numReviews: 3,
    price: 2799,
    originalPrice: 4699,
    discount: "40% off",
  },
]);

let giftBoxSwiper: any = null;

onMounted(() => {
  if (typeof window !== "undefined" && (window as any).Swiper) {
    const Swiper = (window as any).Swiper;

    giftBoxSwiper = new Swiper(".gift-box-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
});
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      `<span class="text-[#E92827] text-xl leading-none">${
        i <= rating ? "★" : "☆"
      }</span>`
    );
  }
  return stars.join("");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ultra&display=swap");
@import url("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

h1 {
  font-family: "Caprasimo", serif;
  font-weight: 400;
  font-size: 40px;
}
.swiper {
  width: 100%;
  padding: 10px 0;
}

.swiper-slide {
  height: auto;
}
</style>
