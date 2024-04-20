<template >
  <div>
    <transition name="modal">
      <div class="fixed inset-0 overflow-y-auto" v-if="showModal">
        <div
          class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"
        >
          <transition name="ease-out">
            <div
              class="fixed inset-0 transition-opacity flex justify-center items-center h-screen"
              @click="showModal = false"
            >
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </transition>

          <transition name="ease-out" class="">
            <div
              class="flex bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle sm:max-w-lg sm:w-full"
              style="margin: auto"
            >
              <button
                type="button"
                @click="showModal = false"
                class="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Quantity
                    </h3>
                    <div class="mt-2">
                      <input
                        v-model="quantity"
                        type="number"
                        min="1"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter quantity"
                      />
                    </div>

                    <button
                      type="button"
                      class="mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:w-auto sm:text-sm"
                      @click="addToCart()"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
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
                <!-- button add to cart -->
                <div class="mt-6">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    @click="openModal()"
                  >
                    Add to cart
                  </button>
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
                    <router-link
                      :to="`/seller/` + product.seller.id"
                      class="text-slate -600 text-sm -ml-2"
                    >
                      {{ product.seller.nama_toko }}
                    </router-link>
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

      <div class="mt-10 py-3 px-5" v-if="token">
        <h2 class="text-s font-semibold text-gray-900 text-2xl">Reviews</h2>
        <!-- form for post the review -->
        <form class="mt-4" @submit.prevent="PostReview()">
          <div class="flex flex-col md:w-1/2 w-full">
            <label for="review" class="text-s font-semibold text-gray-900"
              >Komentar</label
            >
            <textarea
              v-model="review"
              id="review"
              class="mt-2 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter your review"
            ></textarea>

            <div class="mt-2">
              <label class="block text-gray-700">Rating</label>
              <div class="flex mt-1">
                <!-- plih bintang 1-5 -->
                <StarIcon
                  v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating"
                  :class="[
                    rating <= selectedRating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-8 w-8 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                  @click="selectedRating = rating"
                />
              </div>
            </div>
            <button
              type="submit"
              class="mt-4 inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Kirim
            </button>
          </div>
        </form>

        <div class="mt-4 space-y-6 bg-white p-4" v-if="product.review">
          <div
            v-for="review in product.review"
            :key="review.id"
            class="flex flex-col items-start"
          >
            <div class="flex items-center mb-1">
              <h3 class="text-lg font-semibold text-sky-500">
                {{ review.nama_customer }}
              </h3>
            </div>
            <div class="flex flex-col bg-gray-100 rounded-lg p-3">
              <p class="text-sm text-gray-800 mb-1">{{ review.review }}</p>
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    review.rating > rating ? 'text-yellow-400' : 'text-black',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
            </div>
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
import { inject } from "vue";
const token = localStorage.getItem("token");
const selectedRating = ref(0);
const showModal = ref(false);
const route = useRoute();
const product = ref([]);
const quantity = ref(1);
const swal = inject("$swal");
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
const addToCart = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "customer/chart",
        {
          product_id: product.value._id.$oid,
          qty: quantity.value,
        }
      );
      if (res.status === 200) {
        swal({
          title: "Success",
          text: "Product added to cart",
          icon: "success",
        });
        showModal.value = false;
        window.location.reload();
      }
    } catch (error) {
      swal({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  } else {
    swal({
      title: "Error",
      text: "Please login first",
      icon: "error",
    });
  }
};
const PostReview = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "customer/review",
        {
          product_id: product.value._id.$oid,
          review: review.value,
          rating: selectedRating.value,
        }
      );
      if (res.status === 200) {
        selectedRating.value = 0;
        review.value = "";
        swal({
          title: "Success",
          text: "Review added",
          icon: "success",
        });
        getProductByid();
      }
    } catch (error) {
      swal({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  } else {
    swal({
      title: "Error",
      text: "Please login first",
      icon: "error",
    });
  }
};
const openModal = () => {
  showModal.value = true;
};
onMounted(() => {
  getProductByid();
});
</script>
<style>
.selectedRating {
  color: yellow;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>