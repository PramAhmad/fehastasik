<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pt-16"
                >
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Keranjang Belanja</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="open = false"
                        >
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li
                            v-for="item in chartItems"
                            :key="item._id.$oid"
                            class="flex py-6"
                          >
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                            >
                              <img
                                :src="item.product.foto[0]"
                                :alt="item.product.nama_produk"
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-gray-900"
                                >
                                  <h3>
                                    <router-link :to="item._id.$oid">{{
                                      item.product.nama_produk
                                    }}</router-link>
                                  </h3>
                                  <p class="ml-4">
                                    {{ item.product.harga_diskon }}
                                  </p>
                                </div>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.product.seller.nama_toko }}
                              </p>
                              <div
                                class="flex flex-1 items-end justify-between text-sm"
                              >
                                <p class="text-gray-500">Qty {{ item.qty }}</p>
                                <div class="flex">
                                  <button
                                    type="button"
                                    class="font-medium text-sky-500 hover:text-indigo-500"
                                    @click="removeProduct(item._id.$oid)"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>Subtotal</p>
                      <p>Rp {{ subtotal }}</p>
                    </div>

                    <p class="mt-0.5 text-sm text-gray-500">
                      Pengiriman dan pajak dihitung saat checkout.
                    </p>
                    <div class="mt-6">
                      <router-link
                        to="/checkout"
                        class="flex items-center justify-center rounded-md border border-transparent bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-600"
                        >Checkout</router-link
                      >
                    </div>
                    <div
                      class="mt-6 flex justify-center text-center text-sm text-gray-500"
                    >
                      <p>
                        or
                        <button
                          type="button"
                          class="font-medium text-sky-500 hover:text-indigo-500"
                          @click="open = false"
                        >
                          Continue Shopping<span aria-hidden="true">
                            &rarr;</span
                          >
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { inject } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const chartItems = ref([]);
const subtotal = ref(0);
const open = ref(true);
const swal = inject("$swal");
const getCharts = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "customer/chart"
      );
      if (res.status === 200) {
        chartItems.value = res.data.data;
        subtotal.value = res.data.total_subtotal;
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  } else {
    console.log("Token not found");
  }
};

const removeProduct = async (productId) => {
  const res = await swal.fire({
    title: "Apakah Anda Yakin?",
    text: "Data yang dihapus tidak bisa dikembalikan",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  });
  if (res.isConfirmed) {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const res = await axios.delete(
          import.meta.env.VITE_API_URL + "customer/chart/" + productId
        );
        if (res.status === 200) {
          getCharts();

          swal.fire("Data berhasil dihapus", {
            icon: "success",
          });
          window.location.reload();
        } else {
          console.log(res.data);
        }
      } catch (error) {
        console.error("Error removing product from chart:", error);
      }
    } else {
      console.log("Token not found");
    }
  } else {
    swal.fire("Data tidak jadi dihapus", "", "info");
  }
};

onMounted(() => {
  getCharts();
});
</script>
