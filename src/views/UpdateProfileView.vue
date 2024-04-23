<template>
  <div>
    <!-- layout -->
    <Navbar />
    <div class="container flex mx-auto h-screen items-center pt-20">
      <div class="flex-grow">
        <div
          class="border border-gray-200 md:bg-white p-4 rounded-lg m-auto md:w-1/2"
        >
          <h1 class="text-lg font-semibold text-gray-700">Update Profile</h1>
          <div class="mt-4">
            <div class="flex items-center gap-5 flex-col">
              <div class="w-full">
                <label class="block text-gray-700">Nama</label>
                <input
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  v-model="profile.nama_lengkap"
                />
              </div>
              <div class="w-full">
                <label class="block text-gray-700">Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  @change="onFileChange"
                />
              </div>
              <div class="mt-4 w-full" v-if="profile.photo">
                <img
                  :src="profile.photo"
                  alt="Profile Photo"
                  class="w-16 h-16 rounded-full mr-4 border border-sky-600 p-2"
                />
              </div>

              <div class="mt-4 w-full">
                <label class="block text-gray-700">No Hp</label>
                <textarea
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  rows="3"
                  v-model="profile.phone_number"
                ></textarea>
              </div>
            </div>

            <div class="mt-4">
              <button
                class="px-4 py-2 bg-sky-600 text-white rounded"
                @click="updateProfile"
              >
                Update Profile
              </button>
              <!-- kembali -->
              <router-link
                to="/profile"
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded ml-2"
                >Kembali</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const newphoto = ref(null);
const profile = ref({
  nama_lengkap: "",
  phone_number: "",
});

const onFileChange = (e) => {
  newphoto.value = e.target.files[0];
  console.log(newphoto.value);
};

const updateProfile = async () => {
  try {
    if (!profile.value.nama_lengkap || !profile.value.phone_number) {
      console.error("Nama lengkap dan nomor telepon harus diisi.");
      return;
    }
    console.log(newphoto.value);
    if (newphoto.value) {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}customer/profile/update`,
        {
          nama_lengkap: profile.value.nama_lengkap,
          phone_number: profile.value.phone_number,
          photo: newphoto.value,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } else {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}customer/profile/update`,
        {
          nama_lengkap: profile.value.nama_lengkap,
          phone_number: profile.value.phone_number,
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
};

const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}customer/profile`
      );
      profile.value = res.data.data;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getUser();
});
</script>

<style lang="">
</style>
