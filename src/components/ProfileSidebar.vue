<template>
  <div>
    <aside class="md:flex md:w-[90%] md:flex-shrink-0">
      <div class="w-full flex-col pb-20">
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 bg-sky-500"
        >
          <h1 class="text-lg font-semibold text-white" v-if="profile">
            Hi, {{ profile.nama_lengkap }}
          </h1>
        </div>
        <nav class="flex-grow md:px-4 pb-4 bg-white">
          <router-link
            to="#"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Profile Saya</router-link
          >
          <!-- ubah profile -->
          <router-link
            to="/profile/update"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Ubah Profile</router-link
          >
          <!-- akun saya -->
          <router-link
            to="#"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Pengaturan Akun</router-link
          >

          <router-link
            to="/alamat"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Alamat Saya</router-link
          >
          <router-link
            to="#"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Pesanan Saya</router-link
          >
          <!-- pesanaan di batalkan -->
          <router-link
            to="#"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Pesanan Dibatalkan</router-link
          >
          <!-- ulasan saya -->
          <router-link
            to="#"
            class="block px-4 py-5 text-sm text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Ulasan Saya</router-link
          >
        </nav>
      </div>
    </aside>
  </div>
</template>
<script setup>
const props = defineProps({
  profile: Object,
});
</script>
<style lang="">
</style>