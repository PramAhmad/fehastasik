<template >
  <div class="bg-gray-100">
    <router-view />
  </div>
</template>
<script setup>
// import axios from "axios";
// import { ref, onMounted } from "vue";

// import { provide } from "vue";
// const user = ref(null);

// provide("user", user.value);
// const getUser = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     const res = await axios.get(import.meta.env.VITE_API_URL + `user`);
//     user.value = res.data;
//     // console.log(user.value);
//   } else {
//     axios.defaults.headers.common["Authorization"] = null;
//   }
// };
// onMounted(() => {
//   getUser();
// });
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap");

.text-p {
  font-family: "Poppins", sans-serif;
}
.text-s {
  font-family: "Sora", sans-serif;
}
</style>