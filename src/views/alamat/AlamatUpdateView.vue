<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4 py-8 pt-20">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-gray-800 md:text-3xl text-2xl my-10">Update Alamat</h2>
        <form>
          <div class="mb-4">
            <label for="nama_penerima" class="block mb-2 text-sm text-gray-600"
              >Nama Penerima</label
            >
            <input
              type="text"
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
            <span class="text-sm text-gray-400">
              Provinsi saat ini {{ selectedProvince }}
            </span>
            <select
              v-model="selectedProvince"
              @change="getCity"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="" disabled>
                Provinsi saat ini {{ selectedProvince }}
              </option>
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
            <span class="text-sm text-gray-400">
              kota saat ini {{ kota }}
            </span>
            <select
              v-model="kota"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="" disabled>kota saat ini{{ kota }}</option>
              <option
                v-for="city in cities"
                :key="city.city_id"
                :value="city"
                class="text-gray-900"
              >
                {{ city.city_name }}
              </option>
            </select>
          </div>
          <!-- kecamatan -->
          <div class="mb-4">
            <label for="kecamatan" class="block mb-2 text-sm text-gray-600"
              >Kecamatan</label
            >
            <input
              type="text"
              v-model="kecamatan"
              id="kecamatan"
              placeholder="Kecamatan"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <!-- kelurahan -->
          <div class="mb-4">
            <label for="kelurahan" class="block mb-2 text-sm text-gray-600"
              >Kelurahan</label
            >
            <input
              type="text"
              v-model="kelurahan"
              id="kelurahan"
              placeholder="Kelurahan"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <!-- alamat -->
          <div class="mb-4">
            <label for="alamat" class="block mb-2 text-sm text-gray-600"
              >Alamat</label
            >
            <textarea
              v-model="alamat"
              id="alamat"
              placeholder="Alamat"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
          </div>
          <div class="mb-4">
            <button
              @click.prevent="updateAlamat"
              :disabled="!selectedProvince || !kota"
              class="bg-sky-600 text-white px-4 py-2 rounded"
            >
              Update
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
import { useRoute } from "vue-router";
import router from "../../router";
const swal = inject("$swal");
const route = useRoute();
const nama_penerima = ref("");
const selectedProvince = ref("");
const kota = ref(null);
const kecamatan = ref("");
const kelurahan = ref("");
const alamat = ref("");
const kodepos = ref("");
const no_hp = ref("");
const province_id = ref("");
const city_id = ref("");

const provinces = ref([]);
const cities = ref([]);

const getAlamatDetail = async () => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + `customer/alamat/` + route.params.id
    );
    const data = res.data.data;

    nama_penerima.value = data.nama_penerima;
    no_hp.value = data.nomor_telepon;
    selectedProvince.value = data.provinsi;
    kota.value = data.kota;
    kecamatan.value = data.kecamatan;
    kelurahan.value = data.kelurahan;
    alamat.value = data.alamat;
    kodepos.value = data.kode_pos;
    province_id.value = data.province_id;
    city_id.value = data.city_id;

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const updateAlamat = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(
        import.meta.env.VITE_API_URL + `customer/alamat/` + route.params.id,
        {
          nama_penerima: nama_penerima.value,
          nomor_telepon: no_hp.value,
          provinsi: selectedProvince.value.province,
          kota: kota.value.city_name,
          kecamatan: kecamatan.value,
          kelurahan: kelurahan.value,
          alamat: alamat.value,
          kode_pos: kodepos.value,
          province_id: selectedProvince.value.province_id,
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
      router.push("/alamat");
    }
  } catch (error) {
    console.error(error);
  }
};

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

onMounted(() => {
  getAlamatDetail();
  getProvince();
});
</script>
  
  <style lang="">
</style>
  