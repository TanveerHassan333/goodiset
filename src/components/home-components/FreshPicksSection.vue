<template>
  <section class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2
        class="font-['Caprasimo'] text-center text-2xl sm:text-5xl md:text-[40px] text-[#303030] mb-12 animate-fadeInDown"
      >
        Fresh Picks! Just Unwrapped
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group"
        >
         <div
  class="relative p-4 md:p-6 bg-gray-50 aspect-square flex items-center justify-center overflow-hidden"
>
  <span
    class="absolute top-0 left-0 mt-4 ml-4 px-3 py-1 text-sm font-semibold border border-[#FE0C0A] text-[#FE0C0A] rounded z-10"
  >
    Sale
  </span>
  <img
    :src="product.imageSrc"
    :alt="product.name"
    class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 hover:-translate-y-1 z-0"
    loading="lazy"
  />
</div>


          <div class="p-4 md:p-5 md:text-start text-center">
            <p class="text-lg font-bold text-[#303030] leading-tight">
              {{ product.name }}
            </p>
            <p class="text-lg font-bold text-[#303030] mb-3 leading-tight">
              {{ product.tag }}
            </p>

            <div
              class="flex md:justify-start justify-center items-center space-x-2 mb-4"
            >
              <div class="flex">
                <span v-html="StarRating({ rating: product.rating })"></span>
              </div>
              <span class="text-md text-gray-500 font-medium"
                >({{ product.numReviews }})</span
              >
            </div>

            <div
              class="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-3 mb-4"
            >
              <p class="text-md font-semibold text-[#6E6E6E] leading-none">
                {{ product.currentPrice }}
              </p>
              <div class="flex items-center space-x-1 mt-1 sm:mt-0">
                <p class="text-sm text-gray-400 line-through leading-none">
                  {{ product.oldPrice }}
                </p>
                <p class="text-sm font-semibold text-[#FE0C0A] leading-none">
                  ({{ product.discount }})
                </p>
              </div>
            </div>

          <button
  class="w-full py-3 px-4 rounded-lg bg-[#FEF2F2] cursor-pointer text-[#FE0C0A] border border-[#FEF2F2] hover:border-[#FE0C0A] font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] flex items-center justify-center"
  aria-label="Add to Bag"
  :disabled="loadingMap[product.id]"
  @click="addItemToCart(product)"
>
  <span v-if="!loadingMap[product.id]">Add to Bag</span>
  <svg
    v-else
    class="animate-spin h-5 w-5 text-[#FE0C0A]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
</button>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";
import image_one from "@/assets/images/fresh-picks/image-one.png";
import image_two from "@/assets/images/fresh-picks/image-two.png";
import image_three from "@/assets/images/fresh-picks/image-three.png";
import image_four from "@/assets/images/fresh-picks/image-four.png";
const loadingMap = ref<Record<number, boolean>>({});
const products = ref([
  {
    id: 1,
    name: "Multicolored Sour Keys",
    tag: "(Gluten-Free)",
    imageSrc: image_one,
    rating: 5,
    numReviews: 3,
    currentPrice: "95.00 AED",
    oldPrice: "190.00 AED",
    discount: "50% Off",
  },
  {
    id: 2,
    name: "Multicolored Sour Keys",
    tag: "(Gluten-Free)",
    imageSrc: image_two,
    rating: 4,
    numReviews: 3,
    currentPrice: "95.00 AED",
    oldPrice: "190.00 AED",
    discount: "50% Off",
  },
  {
    id: 3,
    name: "Multicolored Sour Keys",
    tag: "(Gluten-Free)",
    imageSrc: image_three,
    rating: 5,
    numReviews: 3,
    currentPrice: "95.00 AED",
    oldPrice: "190.00 AED",
    discount: "50% Off",
  },
  {
    id: 4,
    name: "Multicolored Sour Keys",
    tag: "(Gluten-Free)",
    imageSrc: image_four,
    rating: 5,
    numReviews: 3,
    currentPrice: "95.00 AED",
    oldPrice: "190.00 AED",
    discount: "50% Off",
  },
]);
const cartStore = useCartStore()
const addItemToCart = async (item: any) => {
  loadingMap.value[item.id] = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    cartStore.addToCart(item);
    showToast("Added to cart successfully!", "success");
  } catch (error) {
    console.error(error);
    showToast("Failed to add item to cart.", "error");
  } finally {
    loadingMap.value[item.id] = false;
  }
};

const showToast = (message: string, type: "success" | "error") => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = `${bgColor} text-white px-4 py-2 rounded fixed top-14 right-6 shadow-lg z-50`;
  document.body.appendChild(toast);
  setTimeout(() => document.body.removeChild(toast), 2500);
};
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
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fadeInDown {
  animation: fadeInDown 1s ease-out;
}
</style>
