<template lang="">
    <div>
          <section class="py-10">
        <div class="container flex px-6 pb-10 flex-wrap">
            <div class="w-full border-2 bg-white py-2 border-gray-300">
                <h2 class="text-3xl font-semibold text-s  text-center text-gray-700">
                New Product
                </h2>
            </div>
            
          <div
            class="relative  flex w-full my-5 md:mx-5 md:w-1/4 flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-md"
            v-for="product in products.data"
            :key="product.id"

            >
            <div
              class="relative mx-3 mt-3 flex h-60 w-fulloverflow-hidden rounded-xl hover:scale-105 transition duration-500"
             
            >
              <img
                class="object-cover"
                :src="product.foto[0]"
                alt="product image"
              />
            
        </div>
            <div class="mt-4 px-5 pb-5">
              
              <a >
                <h5 class="text-xl tracking-tight text-slate-900 font-bold">
                  {{ product.nama_produk }} 
                </h5>
              </a>
            
              <div class="seller-info flex items-center mt-2 ">
      <img :src="product.seller.foto" alt="" class="w-10 h-10 rounded-full border border-slate-400   mr-4">
      <div class="seller-info-details">
        <div class=""><router-link :to="`seller/`+product.seller.id" class="text-slate-600 text-sm -ml-2">{{ product.seller.nama_toko }}</router-link></div>
    
      </div>
    </div>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-lg   font-bold text-slate-900 mr-1"
                    >Rp {{product.harga_diskon}}</span
                  >
                  <span class="text-sm text-slate-900 line-through"
                    >Rp {{ product.harga}}</span
                  >
                </p>
              </div>
              <div class="flex items-center mb-5">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span
                  class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold"
                  >5.0</span
                >
              </div>
              <router-link
                :to="`/product/${product._id.$oid}`"
                class="flex items-center justify-center rounded-md bg-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
              
                Lihat Product</router-link
              >
            </div>
          </div>
          <!-- component -->
          
        </div>
        <div class="flex justify-center">
      <router-link
        to=""
        class="py-3 px-6 text-white font-semibold bg-sky-500 rounded-full text-center hover:bg-sky-400"
      >
        Lihat Semua Product
      </router-link>
    </div>
      </section>
    </div>
</template>
 <script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

let products = ref([]);

const getData = async () => {
  const res = await axios.get(import.meta.env.VITE_API_URL + `products`);

  products.value = res.data.data;
  console.log(products.value);
};

onMounted(() => {
  getData();
});
</script>
<style lang="">
</style>