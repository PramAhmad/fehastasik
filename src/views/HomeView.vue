<template>
  <div class="h-[200vh] w-full">
    <Navbar />
    <div class="container">
      <div class="bg-gray-100 flex relative z-20 items-center overflow-hidden">
        <div
          class="container mx-auto px-6 flex relative py-20 min-h-screen items-center"
        >
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 mb-12"></span>
            <h1
              class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800"
            >
              Has
              <span class="text-5xl sm:text-7xl"> Tasik </span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              fugiat quaerat ratione error porro.s
            </p>
            <div class="flex mt-8">
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-sky-500 border-2 border-transparent text-white text-md mr-4 hover:bg-sky-400"
              >
                Lihat product
              </a>
              <a
                href="#"
                class="hidden md:block uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div class="sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOBG4wEYzXBuOJKCFAtCTPOHY7H6UtGa3-JNjAYTGQai3scvpj5GzFgGmDfb6BOgezMIk9Zbr6UKz4whiyKiABdN4P75x_uTareEFS13ReaaTWggAERLjfDWvUx9wWixiubN8FIB4b7t5qkFdSRDrjpaw=w621-h932-s-no-gm?authuser=0"
              class="max-w-xs md:max-w-xl m-auto"
            />
          </div>
        </div>
      </div>

      <!-- category -->
      <CategoryCard />
    </div>
  </div>
</template>
  
  <script setup>
import Navbar from "../components/Navbar.vue";
import CategoryCard from "../components/CategoryCard.vue";
const categories = [];
</script>
  
  <style scoped>
</style>