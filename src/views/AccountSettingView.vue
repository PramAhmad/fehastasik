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
          <!-- display email  and change password-->
          <div class="md:col-span-4">
            <div class="md:flex md:items-start md:justify-start">
              <div class="p-4 bg-white rounded shadow w-[400px]">
                <h2 class="text-xl font-bold mb-4">Account Setting</h2>
                <div class="flex items">
                  <h4>Email</h4>
                  <p class="text-gray-500">{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import ProfileSidebar from "../components/ProfileSidebar.vue";
import { onMounted, ref } from "vue";
const profile = ref([]);
const user = ref([]);
const getCustomerInfo = async () => {
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
const getUserLogin = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(import.meta.env.VITE_API_URL + `user`);

    user.value = res.data;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

onMounted(() => {
  getCustomerInfo();
  getUserLogin();
});
</script>
<style lang="">
</style>