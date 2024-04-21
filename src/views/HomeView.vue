<template>
  <div class="w-full">
    <Navbar />
    <div class="container">
      <div class="flex relative z-20 items-center overflow-hidden">
        <div
          class="container mx-auto px-6 flex relative pt-10 min-h-screen items-center"
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
              <router-link
                to="/products"
                class="uppercase py-2 px-4 rounded-lg bg-sky-500 border-2 border-transparent text-white text-md mr-4 hover:bg-sky-400"
              >
                Lihat product
              </router-link>
              <router-link
                to="/about"
                class="hidden md:block uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white text-md"
              >
                About Us
              </router-link>
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

      <!-- all -->
      <section class="pt-10 pb-16">
        <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"
          >
            <div
              class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczN5ayhgzYNE9MpepJ0voqO48I1jnZxmgn-jzjAKTVYFxm-E8223_CYueL1F3b9JjEtAhhYvoykA-NHtsbRDf_iseRXRhYU9YPfikL0Sbm7-QQRedcuAw0-ivNAQRdXubxcXzkc7y_u1gXS1Qz5yPz8R=w1657-h932-s-no-gm?authuser=0"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                ></div>
                <h3
                  class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                >
                  Hastasik
                </h3>
              </a>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOYn3Buq4YOHc1XZraJab5mZ10KgoPDIUnZqAR9muhFGWBxe5ZwIvhdRIfABFbMc8ZfJAMcexUemtYfalydRNUlxna4HKGbCAv6XtqnbLyczQ5OiC-ASCP9izjYW1t5GKosd7omDMrOxbb6KlOXhmq4=w564-h844-s-no-gm?authuser=0"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                ></div>
                <h3
                  class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                >
                  Jadi Seller
                </h3>
              </a>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczPrJafp2KH7-KnxMD2b5rZB63lRJJGG7e8hekZ57l38iAPfB69KvyEOrKoO-IiX6rfV2tx12L29vvQ4cnr8oj_Y0UxjVCAizniq9SS2ITi4eLEV8JGay1V7SSkhIZsBkEoAVF7HwnuwbpJcLU8njk1X=w525-h932-s-no-gm?authuser=0"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                  ></div>
                  <h3
                    class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                  >
                    About Us
                  </h3>
                </a>
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczN4KGglNjalD7dJEJoERrSCAQDZmaog-__6LzuZ6kOQwjBZAhE5alAbKjv9SVwwozVe3V5aVGG9_x5AJU1SBELE57TDlTYvYd3It3eIgQtlVDRCUoOgBWfk95FhrRJKBTU331X4mAzwo1B20elR27gJ=w564-h421-s-no-gm?authuser=0"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                  ></div>
                  <h3
                    class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                  >
                    Contact Us
                  </h3>
                </a>
              </div>
            </div>
            <div
              class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPG-gY9XtFOJRXWAPUeE5EIwF4g6KpDKBXbDUQsYP6ocNRDyxL0sJz0Y_xPbOPlEj6EBP9_2G1GwUqrOPE7NMCZEfq3-2dG6NyhmbAzSoE_MFA4L15zS2fnMoxxBaajARiUpy2yWv6DMKw8xIwQb_05=w564-h376-s-no-gm?authuser=0   "
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                ></div>
                <h3
                  class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"
                >
                  Ngeresik
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- category -->
      <CategoryCard />

      <!-- New Product -->
      <NewProduct />
      <!-- component -->
      <div class="relative overflow-hidden bg-white">
        <div aria-hidden="true" class="absolute inset-0">
          <div
            class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPOxLLCAjpeU7ByyvgXxfr8EKEv0WHfMj5M5ywRc6GuFHTDTeI4v2LGTITi1PtqmOGpOg8EGlcj1bmlj3rz0p3B-PyNn4a14GqXhHE9jwJs2pG_KhXx8l4n9nRD3MlJPHG4yy94apBRMHJXDZEtcP2U=w1657-h932-s-no-gm?authuser=0"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="absolute inset-0 bg-white bg-opacity-75"></div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-white via-white"
          ></div>
        </div>

        <section
          aria-labelledby="sale-heading"
          class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="sale-heading"
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Dapatkan Barang Exclusive Dari TASIKMALAYA
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">
              Product terbatas dan exclusive dari tasikmalaya. Hanya dibuat dari
              seller terverifikasi dan terpercaya.
            </p>
            <a
              href="#"
              class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto"
              >Dapatkan Sekarang !!</a
            >
          </div>
        </section>

        <!-- Testimonials -->
        <section
          aria-labelledby="testimonial-heading"
          class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="testimonial-heading"
              class="text-2xl font-bold tracking-tight text-gray-900"
            >
              What are people saying?
            </h2>

            <div
              class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
            >
              <blockquote class="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  class="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p class="text-lg text-gray-600">
                    Orderanku mantepkali cuy cepet terus barangnya juga keren di
                    tambah dengan harga yang terjakangka ^^
                  </p>
                  <cite
                    class="mt-4 block font-semibold not-italic text-gray-900"
                    >Pramudita , Bandung</cite
                  >
                </div>
              </blockquote>
              <blockquote class="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  class="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p class="text-lg text-gray-600">
                    Products punya kualitas yang bagus dan ke orian nya
                    terjamin, mantapp
                  </p>
                  <cite
                    class="mt-4 block font-semibold not-italic text-gray-900"
                    >Virgi, Jakarta</cite
                  >
                </div>
              </blockquote>
              <blockquote class="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  class="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p class="text-lg text-gray-600">
                    Barangnya bagus banget, kualitasnya juga oke, harga nya
                    terjangkau pengalaman belanja nya juga bagus
                  </p>
                  <cite
                    class="mt-4 block font-semibold not-italic text-gray-900"
                    >Adit, Bogor</cite
                  >
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>
  
  <script setup>
import Navbar from "../components/Navbar.vue";
import CategoryCard from "../components/CategoryCard.vue";
import NewProduct from "../components/NewProduct.vue";
import Footer from "../components/Footer.vue";
const categories = [];
</script>
  
  <style scoped>
</style>