<template>
  <div>
    <Navbar />
    <!-- form create -->
    <div class="container mx-auto px-4 py-8 pt-20">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-gray-800 md:text-3xl text-2xl my-10">Tambah Alamat</h2>
        <form>
          <div class="mb-4">
            <label for="nama_penerima" class="block mb-2 text-sm text-gray-600"
              >Nama Penerima</label
            >
            <input
              type="text"
              name="nama_penerima"
              v-model="nama_penerima"
              id="nama_penerima"
              placeholder="Nama Penerima"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mb-4">
            <label for="no_hp" class="block mb-2 text-sm text-gray-600"
              >No HP</label
            >
            <input
              type="text"
              name="no_hp"
              v-model="no_hp"
              id="no_hp"
              placeholder="No HP"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mb-4">
            <label for="provinsi" class="block mb-2 text-sm text-gray-900"
              >Provinsi</label
            >
            <select
              v-model="selectedProvince"
              @change="getCity"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Pilih Provinsi</option>
              <option
                v-for="province in provinces"
                :key="province.province_id"
                :value="province"
                class="text-gray-900"
              >
                {{ province.province }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label for="kota" class="block mb-2 text-sm text-gray-600"
              >Kota</label
            >
            <select
              v-model="kota"
              :disabled="!selectedProvince"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Pilih Kota</option>
              <option
                v-for="city in cities"
                :key="city.city_id"
                :value="city"
                class="text-gray-900"
              >
                {{ city.type }} {{ city.city_name }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label for="kecamatan" class="block mb-2 text-sm text-gray-600"
              >Kecamatan</label
            >
            <input
              type="text"
              name="kecamatan"
              v-model="kecamatan"
              id="kecamatan"
              placeholder="Kecamatan"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mb-4">
            <label for="kelurahan" class="block mb-2 text-sm text-gray-600"
              >Kelurahan</label
            >
            <input
              type="text"
              name="kelurahan"
              v-model="kelurahan"
              id="kelurahan"
              placeholder="Kelurahan"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <!-- text area alamat  -->
          <div class="mb-4">
            <label for="alamat" class="block mb-2 text-sm text-gray-600"
              >Alamat</label
            >
            <textarea
              name="alamat"
              v-model="alamat"
              id="alamat"
              placeholder="Alamat"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>
          <div class="mb-4">
            <button
              @click.prevent="createCity"
              :disabled="!selectedProvince || !kota"
              class="bg-sky-600 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
            <!-- back -->
            <router-link
              to="/alamat"
              class="bg-gray-200 text-gray-700 px-4 py-3 rounded ml-2"
              >Kembali</router-link
            >
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { inject, onMounted, ref } from "vue";
import router from "../../router";

const nama_penerima = ref("");
const no_hp = ref("");
const selectedProvince = ref("");
const kota = ref(null);
const kecamatan = ref("");
const kelurahan = ref("");
const alamat = ref("");
const provinces = ref([]);
const cities = ref([]);
const swal = inject("$swal");
const getProvince = async () => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "rajaongkir/province"
    );
    provinces.value = res.data.rajaongkir.results;
    console.log(provinces.value);
  } catch (error) {
    console.error(error);
  }
};

const getCity = async () => {
  try {
    if (selectedProvince.value) {
      const res = await axios.get(
        import.meta.env.VITE_API_URL +
          `rajaongkir/city?province=${selectedProvince.value.province_id}`
      );
      cities.value = res.data.rajaongkir.results;
      console.log(cities.value);
    }
  } catch (error) {
    console.error(error);
  }
};

const createCity = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.post(
      import.meta.env.VITE_API_URL + `customer/alamat`,
      {
        nama_penerima: nama_penerima.value,
        nomor_telepon: no_hp.value,
        provinsi: selectedProvince.value.province,
        kota: kota.value.city_name,
        kecamatan: kecamatan.value,
        kelurahan: kelurahan.value,
        kode_pos: kota.value.postal_code,
        province_id: selectedProvince.value.province_id,
        alamat: alamat.value,
        city_id: kota.value.city_id,
      }
    );
    console.log(res.data);
    if (res.data.success) {
      swal({
        title: "Berhasil",
        text: res.data.message,
        icon: "success",
      });
      router.push("/alamat");
    } else {
      swal({
        title: "Gagal",
        text: res.data.message,
        icon: "error",
      });
    }
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

onMounted(() => {
  getProvince();
});
</script>

<style lang="">
</style>
