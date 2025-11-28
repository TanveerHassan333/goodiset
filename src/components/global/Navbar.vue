<template>
  <nav class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    <div
      v-if="showAnnouncement"
      class="bg-[#E92827] text-white text-sm md:text-base px-4 py-2 flex items-center justify-center relative"
    >
      <span class="text-center">
        🎄🎄🎄 Give the gift of sweet joy with the Katjes Advent calendar 🎄🎄🎄
      </span>
      <button
        @click="showAnnouncement = false"
        class="absolute right-4 text-white text-xl font-bold hover:opacity-75"
      >
        ×
      </button>
    </div>
    <div
      class="max-w-7xl mx-auto px-4 md:px-0 h-[80px] flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <button @click="openSidebar = true" class="lg:hidden">
          <Menu class="text-[#E92827]" />
        </button>
        <router-link to="/" class="flex items-center">
          <img
            src="@/assets/images/goodiset-logo.png"
            alt="Goodiset"
            class="h-14 object-contain"
          />
        </router-link>
      </div>
      <div class="hidden lg:flex items-center gap-10">
        <div class="flex items-center gap-1 cursor-pointer group hover:text-[#E92827]">
          <span class="font-medium text-[#303030]">Shop</span>
          <span class="text-xs">
            <svg
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999996 5.70004L6.28005 1L11.56 5.70004"
                stroke="#303030"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>

        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Pick & Mix</a
        >
        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Candy</a
        >
        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Chocolate</a
        >
        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Boxes</a
        >
        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Baskets</a
        >
        <a href="#" class="font-medium text-[#303030] hover:text-[#E92827]"
          >Celebrations</a
        >
      </div>
      <div class="flex items-center gap-5 text-gray-800">
        <button class="hover:text-[#E92827] text-xl">
          <Search class="text-[#E92827]" />
        </button>

        <button class="hover:text-[#E92827] text-xl">
          <CircleUser class="text-[#E92827]" />
        </button>

        <router-link to="/cart" class="relative hover:text-[#E92827] text-xl">
         <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.4167 24.1667C1.7521 24.1667 1.1832 23.93 0.7099 23.4568C0.2367 22.9835 0 22.4146 0 21.75V7.25001C0 6.58541 0.2367 6.01651 0.7099 5.54321C1.1832 5.07001 1.7521 4.83331 2.4167 4.83331H4.8334C4.8334 3.50421 5.3066 2.36632 6.2532 1.41979C7.1997 0.47327 8.3375 0 9.6667 0C10.9959 0 12.1337 0.47327 13.0802 1.41979C14.0268 2.36632 14.5 3.50421 14.5 4.83331H16.9167C17.5813 4.83331 18.1502 5.07001 18.6235 5.54321C19.0967 6.01651 19.3334 6.58541 19.3334 7.25001V21.75C19.3334 22.4146 19.0967 22.9835 18.6235 23.4568C18.1502 23.93 17.5813 24.1667 16.9167 24.1667H2.4167ZM2.4167 21.75H16.9167V7.25001H14.5V9.66671C14.5 10.009 14.3842 10.296 14.1526 10.5276C13.921 10.7592 13.6341 10.875 13.2917 10.875C12.9493 10.875 12.6624 10.7592 12.4308 10.5276C12.1992 10.296 12.0834 10.009 12.0834 9.66671V7.25001H7.25V9.66671C7.25 10.009 7.1342 10.296 6.9026 10.5276C6.671 10.7592 6.3841 10.875 6.0417 10.875C5.6993 10.875 5.4124 10.7592 5.1808 10.5276C4.9492 10.296 4.8334 10.009 4.8334 9.66671V7.25001H2.4167V21.75ZM7.25 4.83331H12.0834C12.0834 4.16871 11.8467 3.59981 11.3735 3.12661C10.9002 2.65331 10.3313 2.41667 9.6667 2.41667C9.0021 2.41667 8.4332 2.65331 7.9599 3.12661C7.4867 3.59981 7.25 4.16871 7.25 4.83331Z" fill="#E92827"/>
</svg>

          <span
            v-if="productCount"
            class="absolute -top-1 -right-2 bg-[#E92827] text-white text-[8px] w-4 h-4 flex justify-center items-center rounded-full"
          >
            {{  productCount }} 
          </span>
        </router-link>
      </div>
    </div>
    <div v-if="openSidebar" class="fixed inset-0 z-[70] flex lg:hidden">
      <div
        class="absolute inset-0 bg-black/40"
        @click="openSidebar = false"
      ></div>

      <div class="relative w-[280px] bg-white h-full p-6 flex flex-col gap-6">
        <div class="flex justify-between items-center mb-4">
          <img src="@/assets/images/goodiset-logo.png" class="h-12" />

          <button @click="openSidebar = false">
            <X class="text-[#E92827]" />
          </button>
        </div>

        <nav class="flex flex-col gap-5 font-medium text-[#303030]">
          <div class="flex items-center gap-2 cursor-pointer">
            <span>Shop</span>
            <svg
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999996 5.70004L6.28005 1L11.56 5.70004"
                stroke="#303030"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <a href="#">Pick & Mix</a>
          <a href="#">Candy</a>
          <a href="#">Chocolate</a>
          <a href="#">Boxes</a>
          <a href="#">Baskets</a>
          <a href="#">Celebrations</a>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { computed, ref } from "vue";
import { Search, CircleUser, Menu, X } from "lucide-vue-next";

const cartStore = useCartStore();
const showAnnouncement = ref(true);
const openSidebar = ref(false);
const productCount = computed(() =>{
  return cartStore.items.length
})
console.log("items in cart", cartStore.items.length)
console.log("items in cart", cartStore.total)
</script>
