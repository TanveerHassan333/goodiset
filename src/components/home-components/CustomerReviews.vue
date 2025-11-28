<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="font-['Caprasimo'] md:text-start text-center text-2xl sm:text-5xl md:text-[40px] text-[#303030] mb-12 animate-fadeInDown"
      >
        Smiles All Around! See Our Happy Customers 😊
      </h2>

      <div class="relative">
        <button
          class="review-prev absolute left-0 top-[160px] -translate-x-1/2 z-50 w-12 h-12 rounded-full border border-[#FE0C0A] bg-white flex items-center justify-center shadow-md hover:bg-red-50"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M7 1L1 7L7 13"
              stroke="#E92827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="swiper testimonial-swiper pb-12">
          <div class="swiper-wrapper">
            <div
              v-for="t in testimonials"
              :key="t.id"
              class="swiper-slide flex flex-col text-center px-2"
            >
              <div
                class="relative md:w-[260px] h-[250px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-visible"
              >
                <img
                  :src="t.image"
                  :alt="t.name"
                  class="object-cover w-full h-full"
                />
                <div
                  class="absolute left-1/2 -translate-x-1/2 -bottom-7 w-[58px] h-[58px] rounded-full bg-[#FFDDDD] flex items-center justify-center text-[#303030] font-semibold text-sm ring-1 ring-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] overflow-visible"
                >
                  {{ t.location }}
                  <span
                    class="absolute bottom-[6px] right-0 w-[15px] h-[15px] rounded-full bg-[#FE0C0A] flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-check-icon lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="mt-12 md:max-w-[260px] text-center">
                <h3 class="font-bold text-[#303030] text-[14px]">
                  {{ t.name }}
                </h3>
                <p class="text-[8px] text-[#383F42] mb-2">{{ t.date }}</p>

                <p class="text-[12px] text-[#303030] leading-relaxed mb-4">
                  {{ t.review }}
                </p>
                <div class="flex justify-center gap-[3px]">
                  <template v-for="i in 5">
                    <svg
                      v-if="i <= t.rating"
                      class="w-[14px] h-[14px] fill-[#E92827]"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 
                         5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    <svg
                      v-else
                      class="w-[14px] h-[14px] text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 
                         5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="review-next absolute right-0 top-[160px] translate-x-1/2 z-50 w-12 h-12 rounded-full border border-[#FE0C0A] bg-white flex items-center justify-center shadow-md hover:bg-red-50"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M1 13L7 7L1 1"
              stroke="#E92827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import review_one from "@/assets/images/reviews/review-1.png";
import review_two from "@/assets/images/reviews/review-2.png";
import review_three from "@/assets/images/reviews/review-3.png";
import review_four from "@/assets/images/reviews/review-4.png";
import review_five from "@/assets/images/reviews/review-5.png";

const testimonials = ref([
  {
    id: 1,
    image: review_one,
    name: "Amina B.",
    date: "November 24, 2021",
    location: "AB",
    rating: 5,
    review:
      'My daughter absolutely adores the costume; she proudly refers to herself as "the true princess." Thank you so much. We look forward to purchasing more.',
  },
  {
    id: 2,
    image: review_two,
    name: "Layla T.",
    date: "November 24, 2021",
    location: "LT",
    rating: 5,
    review:
      "Thank you, Party Corner, for the amazing Isabella and Mirabel costumes! ❤️ My girls had a blast being these characters. The fabric quality and stitching are top-notch.",
  },
  {
    id: 3,
    image: review_three,
    name: "Clara M.",
    date: "November 24, 2021",
    location: "CM",
    rating: 4,
    review:
      "Great value for the price! The delivery was super fast. I just wish it came with additional items instead of just cupcake toppers.",
  },
  {
    id: 4,
    image: review_four,
    name: "Fatima R.",
    date: "November 24, 2021",
    location: "FR",
    rating: 3,
    review:
      "The quality is outstanding, and the costume looks incredibly realistic. Sizes run a bit small but overall great.",
  },
  {
    id: 5,
    image: review_five,
    name: "Amina B.",
    date: "November 24, 2021",
    location: "AB",
    rating: 5,
    review:
      "My daughter absolutely adores the costume; she proudly refers to herself as the true princess!",
  },
  {
    id: 6,
    image: review_one,
    name: "Amina B.",
    date: "November 24, 2021",
    location: "AB",
    rating: 5,
    review: "Amazing experience and quality.",
  },
]);

let reviewSwiper: any = null;

onMounted(() => {
  if (typeof window !== "undefined" && (window as any).Swiper) {
    const Swiper = (window as any).Swiper;

    reviewSwiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      },
    });
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&display=swap");
.font-caprasimo {
  font-family: "Caprasimo", cursive;
}
.swiper-slide {
  height: auto;
}
</style>
