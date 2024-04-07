<template>
  <div class="max-w-full px-4 sm:px-6 lg:px-8 py-12 container">
    <h2 class="text-3xl font-semibold mb-6">Shop by Category</h2>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="category in categories"
          :key="category.id"
          class="swiper-slide"
        >
          <div class="bg-white shadow-md p-4 rounded-lg">
            <img
              :src="category.imageSrc"
              :alt="category.imageAlt"
              class="w-24 h-24 mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">{{ category.name }}</h3>
            <p class="text-gray-700">{{ category.description }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Tas Wanita",
          description: "Koleksi tas wanita terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/1.png",
          imageAlt: "Tas Wanita",
        },
        {
          id: 2,
          name: "Tas Pria",
          description: "Koleksi tas pria terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/2.png",
          imageAlt: "Tas Pria",
        },
        {
          id: 3,
          name: "Tas Anak",
          description: "Koleksi tas anak terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/3.png",
          imageAlt: "Tas Anak",
        },
        {
          id: 4,
          name: "Tas Ransel",
          description: "Koleksi tas ransel terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/4.png",
          imageAlt: "Tas Ransel",
        },
        {
          id: 5,
          name: "Tas Selempang",
          description: "Koleksi tas selempang terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/5.png",
          imageAlt: "Tas Selempang",
        },
        {
          id: 6,
          name: "Tas Travel",
          description: "Koleksi tas travel terbaru",
          imageSrc: "https://www.tailwind-kit.com/images/object/6.png",
          imageAlt: "Tas Travel",
        },
      ],
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      loop: true,
      centeredSlides: true, // Tambahkan centeredSlides
      loopedSlides: this.categories.length, // Set loopedSlides sesuai dengan jumlah slide yang di-loop
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style scoped>
/* Tambahkan gaya CSS khusus di sini jika diperlukan */
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: auto !important;
}
</style>
