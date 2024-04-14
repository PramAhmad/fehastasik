<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <div class="pt-20">
        <div class="flex">
          <!-- sidebar -->
          <ProfileSidebar :profile="profile" />
          <!-- main content -->
          <div class="md:grid w-full h-full md:grid-cols-2 px-5 md:pt-20 pt-10">
            <div>
              <div
                class="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 px-5"
              >
                <div class="md:w-[300px] w-full overflow-hidden rounded-lg">
                  <img
                    :src="profile['1'].photo"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div class="mt-16">
              <h1
                class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              >
                Nama {{ profile["1"].nama_lengkap }}
              </h1>
              <div class="mt-4 lg:row-span-3 lg:mt-0">
                <h2 class="sr-only">Profile information</h2>
                <p class="text-3xl tracking-tight text-gray-900">
                  {{ profile["1"].email }}
                </p>
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
components: {
  Navbar, ProfileSidebar;
}

const profile = ref([]);

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
onMounted(() => {
  getUser();
});
</script>
<style lang="">
</style>