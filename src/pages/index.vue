<template>
  <div>
    <!-- Hero Section -->
    <div data-aos="fade-up" data-aos-duration="800">
      <HeroSection />
    </div>

    <!-- Trending Section -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <TrendingSection />
    </div>

    <!-- Fresh Picks Section -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
      <FreshPicksSection />
    </div>

    <!-- Inner Hero Section -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
      <InnerHeroSection />
    </div>

    <!-- Gift Boxes Section -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <GiftBoxesSection />
    </div>

    <!-- Trending Section again -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      <TrendingSection />
    </div>

    <!-- Customer Reviews -->
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
      <CustomerReviews />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/home-components/HeroSection.vue";
import FreshPicksSection from "@/components/home-components/FreshPicksSection.vue";
import InnerHeroSection from "@/components/home-components/InnerHeroSection.vue";
import GiftBoxesSection from "@/components/home-components/GiftBoxesSection.vue";
import TrendingSection from "@/components/home-components/TrendingSection.vue";
import CustomerReviews from "@/components/home-components/CustomerReviews.vue";
</script>

