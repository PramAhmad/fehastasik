<template >
  <div>
    <Navbar />
    <div class="container">
      <div class="pt-6">
        <!-- Image gallery -->
        <!-- grid 2 -->
        <div class="md:grid w-full h-full md:grid-cols-2 px-5 md:pt-20 pt-10">
          <div>
            <div
              class="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 px-5"
            >
              <div class="md:w-[500px] w-full overflow-hidden rounded-lg">
                <img
                  :src="product.foto"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="flex flex-wrap justify-start mt-4">
              <div
                class="w-20 h-20 m-2 cursor-pointer"
                v-for="image in product.images"
                :key="image.src"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              {{ product.nama_produk }}
            </h1>

            <!-- Options -->
            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">
                {{ product.harga_diskon }}
              </p>

              <!-- Reviews -->
              <div class="mt-6" v-if="product.review">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        product.avg_review > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 class="sr-only">
                    {{ product.avg_review }} out of 5 stars
                  </h1>
                  <p
                    class="ml-3 text-sm font-medium text-sky-600 hover:text-sky-500"
                  >
                    {{ product.review.length }} reviews
                  </p>
                </div>
              </div>
              <!-- seller info -->
              <div
                class="seller-info flex items-center mt-5"
                v-if="product.seller"
              >
                <img
                  :src="product.seller.foto"
                  alt=""
                  class="w-10 h-10 rounded-full border border-slate-400 mr-4"
                />
                <div class="seller-info-details">
                  <div class="">
                    <p class="text-slate -600 text-sm -ml-2">
                      {{ product.seller.nama_toko }}
                    </p>
                  </div>
                </div>
              </div>
              <h4
                class="mt-10 px-2 text-s font-semibold text-gray-900 text-2xl"
              >
                Informasi Penjual
              </h4>
              <div class="mt-4 px-2">
                <div class="flex items-center">
                  <p class="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus magni dolorum tempore iusto odio nulla libero
                    adipisci, consequuntur itaque accusantium.
                  </p>
                </div>
              </div>
              <h4
                class="mt-10 px-2 text-s font-semibold text-gray-900 text-2xl"
              >
                Contact Penjual
              </h4>
              <!-- list -->
              <ul>
                <li class="mt-4 px-2">0859138483542</li>
                <li class="mt-4 px-2">pramudita5800@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 px-5"
        >
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              {{ product.nama_produk }}
            </h1>
          </div>
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ product.deskripsi }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Kategori Prdoduk</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400">
                  <span class="text-gray-600">{{ product.category }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Stock Product</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.stok }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 py-3 px-5">
        <h2 class="text-s font-semibold text-gray-900 text-2xl">Reviews</h2>
        <div class="mt-4 space-y-6" v-if="product.review">
          <div v-for="review in product.review" :key="review.id">
            <h3 class="text-lg font-bold">{{ review.nama_customer }}</h3>

            <div class="flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
            <p class="text-sm text-gray-600">- {{ review.review }}</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
components: {
  Footer;
  Navbar;
}
import axios from "axios";
import { useRoute } from "vue-router";
import router from "../router";
import { onMounted, ref } from "vue";

import { StarIcon } from "@heroicons/vue/20/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const route = useRoute();
const product = ref([]);
const getProductByid = async () => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + "products/" + route.params.id
  );
  if (res.status == 200) {
    product.value = res.data.data;
    console.log(product.value);
  } else {
    alert(res.data);

    router.push("/");
  }
};

onMounted(() => {
  getProductByid();
});
</script>
<style lang="">
</style>