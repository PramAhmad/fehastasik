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
              <div
                class="md:w-[500px] w-full overflow-hidden rounded-lg"
                v-if="activeImg"
              >
                <img
                  :src="activeImg"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <!-- saat gada active img -->
              <div
                class="md:w-[500px] w-full overflow-hidden rounded-lg"
                v-else
              >
                <div v-if="product.foto">
                  <img
                    :src="product.foto[0]"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-start my-4">
              <div
                class="w-20 h-20 m-2 cursor-pointer"
                v-for="(image, index) in product.foto"
                :key="index"
                @click="changeImage(index)"
              >
                <img
                  :src="image"
                  :alt="'Thumbnail ' + (index + 1)"
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
              <!-- harga asli -->
              <div class="flex gap-2">
                <p class="text-3xl tracking-tight text-red-500 line-through">
                  Rp {{ product.harga }}
                </p>
                <p class="text-3xl tracking-tight mt-2 text-gray-900 font-bold">
                  Rp {{ product.harga_diskon }}
                </p>
              </div>

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
              </div>
              <div class="mt-6" v-else>
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="['text-gray-200', 'h-5 w-5 flex-shrink-0']"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 class="sr-only">0 out of 5 stars</h1>
                  <p
                    class="ml-3 text-sm font-medium text-sky-600 hover:text-sky-500"
                  >
                    0 reviews
                  </p>
                </div>
              </div>
              <div class="mt-6">
                <button
                  type="button"
                  class="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  @click="openModal()"
                >
                  Add to cart
                </button>
              </div>
              <!-- seller info -->
            </div>
          </div>
        </div>
        <!-- seller infor -->
        <div class="md:grid grid-cols-4 items-center bg-white px-3 py-5 hidden">
          <div
            class="seller-info flex items-center mt-5 px-5 border-r border-gray-200"
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
            <!-- button lihat toko dan whatsapp toko -->
            <div class="flex flex-col gap-2 ml-5">
              <button
                type="button"
                class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Lihat Toko
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                WhatsApp Toko
              </button>
            </div>
          </div>
          <!-- list -->

          <div>
            <ul>
              <li class="mt-4 px-2">
                <div class="flex gap-3">
                  <p class="text-gray-600 text-sm text-p">
                    product terjual
                    <span class="text-sky-600 font-bold">290</span>
                    kali
                  </p>
                </div>
              </li>
              <li class="mt-4 px-2">
                <div class="flex gap-3">
                  <p class="text-gray-600 text-sm text-p">
                    jumlah produk yang dijual
                    <span class="text-sky-600 font-bold">20</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="mt-4 px-2">
                <div class="flex gap-3">
                  <p class="text-gray-600 text-sm text-p">
                    bergabung
                    <span class="text-sky-600 font-bold">5</span> tahun lalu
                  </p>
                </div>
              </li>
              <li class="mt-4 px-2">
                <div class="flex gap-3">
                  <p class="text-sm text-p text-gray-600">
                    5 penilaian dari pelanggan
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="px-3">
            <ul>
              <li class="mt-4 -ml-2">
                <div class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  0859138483542
                </div>
              </li>
              <li class="mt-4 -ml-2">
                <div class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>

                  pramudita5800@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- seller info mobile -->
        <!-- Seller Information (Mobile) -->
        <div class="md:hidden bg-white px-3 py-5 mt-5">
          <div class="border-b border-gray-200 py-3">
            <div class="flex items-center" v-if="product.seller">
              <img
                :src="product.seller.foto"
                alt=""
                class="w-10 h-10 rounded-full border border-slate-400 mr-4"
              />
              <div>
                <router-link
                  :to="`/seller/` + product.seller.id"
                  class="text-slate -600 text-sm -ml-2"
                >
                  {{ product.seller.nama_toko }}
                </router-link>
                <div class="flex gap-2 mt-1">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Lihat Toko
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    WhatsApp Toko
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Seller Stats -->
          <div class="mt-3">
            <ul>
              <li class="mt-3">
                <p class="text-gray-600 text-xs">
                  Produk Terjual:
                  <span class="text-sky-600 font-bold">290</span>
                </p>
              </li>
              <li class="mt-3">
                <p class="text-gray-600 text-xs">
                  Jumlah Produk yang Dijual:
                  <span class="text-sky-600 font-bold">20</span>
                </p>
              </li>
              <li class="mt-3">
                <p class="text-gray-600 text-xs">
                  Bergabung:
                  <span class="text-sky-600 font-bold">5</span> Tahun Lalu
                </p>
              </li>
              <li class="mt-3">
                <p class="text-gray-600 text-xs">
                  Penilaian dari Pelanggan:
                  <span class="text-sky-600 font-bold">5</span>
                </p>
              </li>
            </ul>
          </div>
          <!-- Contact Seller -->
          <div class="mt-3 border-t border-gray-200">
            <ul>
              <li class="mt-3">
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>

                  <p class="text-gray-600 text-xs">0859138483542</p>
                </div>
              </li>
              <li class="mt-3">
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>

                  <p class="text-gray-600 text-xs">pramudita5800@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid w-full bg-white rounded-lg mt-10">
          <div class="py-10 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6 px-5">
            <div class="lg:col-span-2 lg:pr-8">
              <h1
                class="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl"
              >
                {{ product.nama_produk }}
              </h1>
            </div>
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p
                  class="text-lg leading-7 mt-3 md:w-2/3 text-left text-gray-900"
                >
                  {{ product.deskripsi }}
                </p>
                <!-- category -->
                <ul>
                  <li class="mt-4">
                    <div class="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 text-gray-600 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <p class="text-gray-600 text-sm text-p">
                        Kategori:
                        <span class="text-sky-600 font-bold">{{
                          product.category
                        }}</span>
                      </p>
                    </div>
                  </li>
                  <!-- dibuat tanggal -->
                  <li class="mt-4">
                    <div class="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 text-gray-600 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>

                      <p class="text-gray-600 text-sm text-p">
                        Dibuat:
                        <span class="text-sky-600 font-bold">{{
                          product.created_at
                        }}</span>
                      </p>
                    </div>
                  </li>
                  <!-- stock -->
                  <li class="mt-4">
                    <div class="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 text-gray-600 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <p class="text-gray-600 text-sm text-p">
                        Stock:
                        <span class="text-sky-600 font-bold">{{
                          product.stok
                        }}</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
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
const activeImg = ref();
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
const changeImage = (index) => {
  activeImg.value = product.value.foto[index];
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