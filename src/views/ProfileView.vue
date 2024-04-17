<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <div class="pt-20">
        <div class="grid md:grid-cols-12 grid-cols-1">
          <!-- sidebar -->
          <div class="md:col-span-3">
            <ProfileSidebar :profile="profile" />
          </div>
          <!-- main content -->
          <!-- main content -->
          <div class="md:col-span-4">
            <div class="md:flex md:items-start md:justify-start">
              <div class="p-4 bg-white rounded shadow w-[400px]">
                <h2 class="text-xl font-bold mb-4">Profile Detail</h2>
                <div class="flex items-center mb-2">
                  <img
                    :src="profile.photo"
                    alt="Profile Photo"
                    class="w-16 h-16 rounded-full mr-4 border border-sky-600 p-2"
                  />
                  <div>
                    <h3 class="text-lg font-semibold text-sky-600">
                      {{ profile.nama_lengkap }}
                    </h3>
                    <p class="text-gray-500">{{ profile.email }}</p>
                  </div>
                </div>
                <p><strong>Phone Number:</strong> {{ profile.phone_number }}</p>
                <!-- update button -->
                <div class="mt-4">
                  <router-link
                    to="/profile/update"
                    class="bg-sky-600 text-white px-4 py-2 rounded"
                    >Update Profile</router-link
                  >
                </div>
              </div>
              <!-- alamat card -->
            </div>
          </div>
          <div class="md:col-span-4">
            <div class="md:flex md:items-start md:justify-start">
              <div class="p-4 md:mt-0 mt-5 bg-white md:rounded shadow md:mx-3">
                <h2 class="text-xl font-bold mb-4">Alamat Utama</h2>
                <div v-for="item in alamat" :key="item.id">
                  <div
                    class="flex items -center justify-between border-b border-gray-200 py-2"
                  >
                    <div>
                      <h3 class="text-lg font-semibold text-sky-600">
                        <span class="text-gray-800">Penerima:</span>
                        {{ item.nama_penerima }}
                      </h3>
                      <p class="text-gray-500">{{ item.nomor_telepon }}</p>
                      <p>
                        {{ item.provinsi }}, Kota {{ item.kota }} Kecamatan
                        {{ item.kecamatan }} Kelurahan {{ item.kelurahan }} kode
                        pos
                        {{ item.kode_pos }}
                      </p>
                    </div>
                    <div>
                      <router-link
                        :to="`/profile/alamat/${item.id}`"
                        class="bg-sky-600 text-white px-4 py-2 rounded"
                        >Edit</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- update page -->
    <Footer />
    <!--  -->
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import ProfileSidebar from "../components/ProfileSidebar.vue";
import Footer from "../components/Footer.vue";
components: {
  Navbar, ProfileSidebar, Footer;
}
import router from "../router";
if (localStorage.getItem("token") === null) {
  router.push("/login");
}
const profile = ref([]);
const alamat = ref([]);
const getUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(
      import.meta.env.VITE_API_URL + `customer/profile`
    );
    profile.value = res.data.data;
    console.log(profile.value);
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

const getAlamatUser = async () => {
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
onMounted(() => {
  getUser();
  getAlamatUser();
});
</script>
<style lang="">
</style>