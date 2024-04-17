<template>
  <div>
    <Navbar />
    <div class="container py-28">
      <div class="flex w-full justify-between px-3">
        <router-link
          to="/profile"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded ml-2"
          >Kembali</router-link
        >

        <router-link
          to="/alamat/create"
          class="px-4 py-2 bg-sky-600 text-white rounded"
          >Tambah Alamat</router-link
        >
      </div>
      <div
        class="md:flex md:items-start md:justify-start justify-around pb-10 pt-5"
      >
        <!-- kembali -->
        <div
          class="p-4 md:mt-0 mt-5 bg-white md:rounded shadow md:mx-3 md:w-1/3"
          v-for="item in alamat"
          :key="item.id"
        >
          <div class="flex justify-between border-b border-gray-200 py-2 mb-3">
            <div>
              <h3 class="md:text-lg font-semibold text-sky-600">
                <span class="text-gray-800 md:inline hidden">Penerima:</span>
                {{ item.nama_penerima }}
              </h3>
              <p class="text-gray-500">{{ item.nomor_telepon }}</p>
              <p>
                {{ item.provinsi }}, Kota {{ item.kota }} Kecamatan
                {{ item.kecamatan }} Kelurahan {{ item.kelurahan }} kode pos
                {{ item.kode_pos }}
              </p>
            </div>
          </div>
          <router-link
            :to="`/alamat/update/${item.id}`"
            class="bg-sky-600 text-white px-4 py-2 rounded-full mr-2"
            >Edit</router-link
          >
          <!-- hapus -->
          <button
            class="bg-red-600 text-white px-4 py-1.5 rounded-full"
            @click="deleteAlamat(item.id)"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>
<script setup>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import ProfileSidebar from "../../components/ProfileSidebar.vue";
import { onMounted, ref } from "vue";
import { inject } from "vue";
component: {
  Navbar, Footer, ProfileSidebar;
}

const alamat = ref([]);
const swal = inject("$swal");
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

const deleteAlamatAction = async (id) => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.delete(
      import.meta.env.VITE_API_URL + `customer/alamat/${id}`
    );
    getAlamat();
    swal("Data berhasil dihapus", {
      icon: "success",
    });
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

const deleteAlamat = async (id) => {
  // Confirm using SweetAlert
  const result = await swal.fire({
    title: "Apakah Anda Yakin?",
    text: "Data yang dihapus tidak bisa dikembalikan",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  });
  if (result.isConfirmed) {
    deleteAlamatAction(id);
  } else {
    swal.fire("Data tidak jadi dihapus", "", "info");
  }
};

onMounted(() => {
  getAlamat();
});
</script>
<style lang="">
</style>