<template>
  <div
    class="max-w-7xl bg-gray-100 flex flex-col overflow-x-hidden pb-16 md:px0 px-6"
  >
    <div class="w-full border-2 bg-white py-2 border-gray-300 mb-10">
      <h2 class="text-3xl font-semibold text-s text-center text-gray-700">
        Category Product
      </h2>
    </div>
    <div ref="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide px-5 md:px-0 flex flex-row justify-center items-center md:gap-10 md:mx-10"
          v-for="category in categories"
          :key="category.id"
        >
          <div
            class="w-full h-full relative rounded-2xl p-4 border-2 border-opacity-20 dark:border-black/30 bg-white backdrop-blur bg-opacity-10 group hover:cursor-pointer mb-12 overflow-hidden"
          >
            <div class="relative">
              <img
                :src="category.imageSrc"
                :alt="category.imageAlt"
                class="w-full h-52"
              />
              <div
                class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-800 grid place-items-center text-white bg-opacity-20 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10"
              >
                <div class="flex flex-col items-center">
                  <p
                    class="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300"
                  >
                    {{ category.name }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="p-4 w-full bg-gray-50 text-center flex justify-center bg-opacity-60 z-20"
            >
              <a class="text-xl" :href="''">{{ category.name }}</a>
            </div>
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
          name: "Payung Geulis",
          imageSrc:
            "https://lh3.googleusercontent.com/pw/AP1GczP8e9o7sW_9i_u57Dq8xBlb3TzJHAstP2eg2Cbc-nd86FFaBno6dcQL4Uc_z6RRiSvMiiBzPYklsoybUHHFtbtpqnE72YgY6Vz0eIkCymYnQdrzSTgIW53sV51iBTxLY0mj4Vr2Sg5I1hqJfEbI5YqN=w1657-h932-s-no-gm?authuser=0",
          imageAlt: "Payung Geulis",
        },
        {
          id: 2,
          name: "Saroja",
          imageSrc:
            "https://id-test-11.slatic.net/p/65edac6574e3ed5e8dd9fd83c1e7f07e.jpg",
          imageAlt: "Saroja",
        },

        {
          id: 3,
          name: "Kelom Geulis",
          imageSrc:
            "https://img.ws.mms.shopee.co.id/id-11134207-7qul9-lfdl3gaumge23d",
          imageAlt: "Kelom Geulis",
        },
        {
          id: 4,
          name: "Batik Tasik",
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCKMq0pu_OCj2VUx-V86W0rEIfSm4l_XU2LHkf690_w&s",
          imageAlt: "Batik Tasik",
        },
        {
          id: 5,
          name: "Samak Mendong",
          imageSrc:
            "https://images.tokopedia.net/img/cache/700/product-1/2020/10/12/122705892/122705892_61b97055-e8e4-415a-8703-28a832914f5d_640_640",
          imageAlt: "Samak Mendong",
        },
        {
          id: 6,
          name: "Oncom Tasik",
          imageSrc:
            "https://awsimages.detik.net.id/community/media/visual/2021/07/25/resep-nasi-tutug-oncom-tasik-2_43.jpeg?w=480",
          imageAlt: "Oncom Tasik",
        },
        {
          id: 7,
          name: "Raginang",
          imageSrc:
            "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/6/6/ef3b36ba-ab87-40cc-8f4d-60ff1c99d774.jpg",
          imageAlt: "Raginang",
        },
        {
          id: 8,
          name: "Anyaman Bambu",
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzx0gW6pADhV5uJHern7WLJVyaV9pxDH2vDy0qMST3w&s",
          imageAlt: "Anyaman Bambu",
        },
      ],
      swiper: null,
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      loopedSlides: this.categories.length,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  max-width: 100%;
  height: auto;
}
</style>
