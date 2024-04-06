<template lang="">
    <div class="h-[200vh] container w-full relative">
        <Navbar/>
        <div class="bg-gray-100 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-20 min-h-screen items-center">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
                   Has
                    <span class="text-5xl sm:text-7xl">
                        Tasik
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat quaerat ratione error porro.s</p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-sky-500 border-2 border-transparent text-white text-md mr-4 hover:bg-sky-400">
                        Lihat Product
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-sky-500 text-sky-500  hover:bg-sky-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class=" sm:w-1/3 lg:w-3/5 relative">
                <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";

components: {
  Navbar;
}
</script>
<style>
</style>
