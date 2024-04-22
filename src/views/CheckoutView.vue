    <template>
  <div>
    <Navbar />
    <div class="container md:pt-28 pt-20">
      <div class="grid sm:px-10 lg:grid-cols-2">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Checkout Pembelian</p>
          <p class="text-gray-400">
            Periksa kembali barang yang akan kamu beli
          </p>
          <div
            class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
          >
            <div
              class="flex items-center justify-between border-b border-gray-200 pb-2"
              v-for="item in chartItems"
              :key="item.id"
            >
              <div class="flex items-center">
                <img
                  class="w-16 h-16 object-cover rounded-lg"
                  :src="item.product.foto[0]"
                  alt=""
                />
                <div class="ml-4">
                  <p class="text-lg font-semibold text-gray-900">
                    {{ item.product.nama_produk }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ item.qty }} x Rp {{ item.product.harga_diskon }}
                  </p>
                </div>
              </div>
              <p class="text-lg font-semibold text-gray-900">
                Rp {{ item.subtotal }}
              </p>

              <button
                type="button"
                class="text-gray-500 hover:text-gray-700 focus:outline-none"
                @click="removeProduct(item._id.$oid)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <!-- delete button -->
          </div>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <div class="">
            <!-- kurir select card -->
            <div
              class="w-full border border-gray-200 rounded-md p-3 flex items-center justify-between"
              @click="openKurirModal = true"
              v-if="!selectedKurir"
            >
              <div>
                <h5 class="text-lg font-medium text-gray-800">
                  Kurir pengiriman
                </h5>
                <p class="text-sm text-gray-500">
                  Tentukan jenis pengiriman yang kamu inginkan
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <!-- kurir selected card -->
            <div
              class="w-full border border-gray-200 rounded-md p-3 flex items-center justify-between"
              v-if="selectedKurir"
              @click="openKurirModal = true"
            >
              <div>
                <h3 class="text-lg text-gray-900">
                  {{ selectedKurir.name }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ selectedKurir.deliveryTime }}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <!-- alamat select card -->
            <div
              class="w-full border border-gray-200 rounded-md p-3 flex items-center justify-between mt-4"
              @click="openAlamatModal = true"
              v-if="!selectedAlamat"
            >
              <div>
                <!-- icon alamat -->

                <h3 class="text-lg text-gray-800 font-medium">
                  Alamat Pengiriman
                </h3>
                <p class="text-sm text-gray-500">
                  Tentukan alamat pengiriman barang
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <!-- alamat selected card -->
            <div
              class="w-full border border-gray-200 rounded-md p-3 flex items-center justify-between mt-4"
              v-if="selectedAlamat"
              @click="openAlamatModal = true"
            >
              <div>
                <h3 class="text-lg text-gray-900">
                  {{ selectedAlamat.nama_penerima }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ selectedAlamat.provinsi }}, Kota {{ selectedAlamat.kota }}
                </p>
                <p class="text-sm text-gray-500">
                  Kecamatan {{ selectedAlamat.kecamatan }} Kelurahan
                  {{ selectedAlamat.kelurahan }} Kode Pos
                  {{ selectedAlamat.kode_pos }}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <!-- cost info -->
            <div class="mt-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center w-full">
                  <form class="mt-5 grid gap-6 w-full">
                    <div
                      v-for="(rajaongkir, index) in rajaongkir.costs"
                      :key="index"
                      class="relative"
                    >
                      <input
                        v-model="selectedCost"
                        :value="rajaongkir.cost[0].value + 3000"
                        class="peer hidden"
                        :id="'radio_' + index"
                        type="radio"
                        name="radio"
                      />
                      <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
                      ></span>
                      <label
                        :for="'radio_' + index"
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      >
                        <div class="ml-5">
                          <span class="mt-2 font-semibold"
                            >{{ rajaongkir.service }}
                            {{ rajaongkir.description }}</span
                          >
                          <p class="text-slate-500 text-sm leading-6">
                            Delivery: {{ rajaongkir.cost[0].etd }} hari
                          </p>
                          <p>Biaya {{ rajaongkir.cost[0].value + 3000 }}</p>
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <button
                class="mt-4 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white"
                @click="changeCourier"
              >
                Pilih kurir
              </button>
            </div>
            <!-- Total -->
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">
                  {{ subtotal }}
                </p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Harga Ongkir</p>
                <p class="font-semibold text-gray-900">
                  {{ formatNumber(selectedCost) }}
                </p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p
                class="text-2xl font-semibold text-gray-900"
                v-if="selectedCost > 0"
              >
                <!-- convert to int subtotal and selected cost -->
                <!-- remove . di subtotal llau jadiin int -->
                {{ formatNumber(formatSubtotal() + selectedCost) }}
              </p>
            </div>
          </div>

          <button
            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
    <!-- modal buat kurir -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      x-show="openKurirModal"
      v-if="openKurirModal"
    >
      <div class="bg-white p-8 rounded-lg w-[500px]">
        <button
          type="button"
          @click="openKurirModal = false"
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
        <h1 class="text-xl font-semibold">Select Courier</h1>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center w-full">
              <form class="mt-5 grid gap-6 w-full">
                <div
                  v-for="(courier, index) in couriers"
                  :key="index"
                  class="relative"
                >
                  <input
                    v-model="selectedKurir"
                    :value="courier"
                    class="peer hidden"
                    :id="'radio_' + index"
                    type="radio"
                    name="radio"
                  />
                  <span
                    class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"
                  ></span>
                  <label
                    :for="'radio_' + index"
                    class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  >
                    <img
                      class="w-14 object-contain"
                      :src="courier.image"
                      alt=""
                    />
                    <div class="ml-5">
                      <span class="mt-2 font-semibold">{{ courier.name }}</span>
                      <p class="text-slate-500 text-sm leading-6">
                        Delivery: {{ courier.deliveryTime }}
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <button
            class="mt-4 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white"
            @click="changeCourier"
          >
            Pilih kurir
          </button>
        </div>
      </div>
    </div>
    <!-- alamat modal -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      x-show="openAlamatModal"
      v-if="openAlamatModal"
    >
      <div class="bg-white p-8 rounded-lg w-[500px]">
        <button
          type="button"
          @click="openAlamatModal = false"
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
        <h1 class="text-xl font-semibold">Select Address</h1>
        <div class="mt-4">
          <div class="flex items center justify-between">
            <div class="flex items center w-full">
              <form class="mt-5 grid gap-6 w-full">
                <div
                  v-for="(address, index) in alamat"
                  :key="index"
                  class="relative"
                >
                  <input
                    v-model="selectedAlamat"
                    :value="address"
                    class="peer hidden"
                    :id="'radio_' + index"
                    type="radio"
                    name="radio"
                  />

                  <label
                    :for="'radio_' + index"
                    class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 ml-3"
                  >
                    <div class="ml-5">
                      <span class="mt-2 font-semibold">{{
                        address.nama_penerima
                      }}</span>
                      <p class="text-slate text-sm leading-6">
                        {{ address.provinsi }}, {{ address.kota }} Kecamatan
                        {{ address.kecamatan }} Kelurahan
                        {{ address.kelurahan }} Kode Pos {{ address.kode_pos }}
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          class="mt-4 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white"
          @click="changeAlamat"
        >
          Pilih Alamat
        </button>
      </div>
    </div>
  </div>
</template>
    <script setup>
if (!localStorage.getItem("token")) {
  window.location.href = "/login";
}
import { onMounted, ref, inject } from "vue";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
const openKurirModal = ref(false);
const openAlamatModal = ref(false);
const selectedKurir = ref(null);
const selectedAlamat = ref(null);
const selectedCost = ref(null);
const alamatseller = ref(null);
const chartItems = ref([]);
const subtotal = ref(0);
const alamat = ref([]);
const costshipping = ref(0);
const swal = inject("$swal");
const rajaongkir = ref([]);
const couriers = [
  {
    id: 1,
    name: "TIKI",
    deliveryTime: "2-4 hari",
    image: "",
    code: "tiki",
  },
  {
    id: 2,
    name: "JNE",
    deliveryTime: "1-2 hari",
    image: "",
    code: "jne",
  },
];
function changeCourier() {
  openKurirModal.value = false;
}
const getProductCart = async () => {
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

        console.log(res.data);
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
          getProductCart();
          swal.fire("Data berhasil dihapus", {
            icon: "success",
          });
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
const getAlamat = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(
      import.meta.env.VITE_API_URL + `customer/alamat`
    );
    alamat.value = res.data.data;
    console.log(alamat.value);
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};
const getCost = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(
      import.meta.env.VITE_API_URL + `rajaongkir/cost`,
      {
        origin: 469,
        destination: selectedAlamat.value.city_id,
        weight: 1000,
        courier: selectedKurir.value.code,
      }
    );
    rajaongkir.value = res.data.rajaongkir.results[0];
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};
const formatNumber = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
const formatSubtotal = () => {
  const subtotalTanpaTitik = subtotal.value.replace(/\./g, "");
  return parseInt(subtotalTanpaTitik);
};
const changeAlamat = () => {
  openAlamatModal.value = false;
  getCost();
};
onMounted(() => {
  getAlamat();

  getProductCart();
});
</script>
    <style lang="">
</style>