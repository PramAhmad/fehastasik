<template>
  <div>
    <div class="bg-white">
      <div class="flex justify-center h-screen">
        <div
          class="hidden lg:block lg:w-1/2"
          style="
            background: url(https://i.pinimg.com/originals/45/82/82/458282fc8c3a6ff82a1adcb30ebd35ff.jpg);
            background-size: cover;
            background-position: center;
          "
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-6xl font-bold text-white sm:text-3xl">Hatasik</h2>

              <p class="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <div class="flex justify-center mx-auto">
                <img
                  class="w-44 md:h-44 sm:h-8"
                  src="../assets/hastasik.png"
                  alt=""
                />
              </div>

              <p class="mt-3 text-gray-500">Masuk Untuk Mendapatkan Akses</p>
            </div>

            <div class="mt-8">
              <form>
                <div>
                  <label for="email" class="block mb-2 text-sm text-gray-600"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    id="email"
                    placeholder="example@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600"
                      >Password</label
                    >
                    <a
                      href="#"
                      class="text-sm text-gray-400 focus:text-sky-500 hover:text-sky-500 hover:underline"
                      >Forgot password?</a
                    >
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <button
                    @click.prevent="Login"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Belum Punya Akun?
                <router-link
                  to="/register"
                  class="text-sky-500 focus:outline-none focus:underline hover:underline"
                  >Sign up</router-link
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//kall ada token auto redirect

import axios from "axios";
import { inject, ref } from "vue";
import router from "../router";
if (localStorage.getItem("token")) {
  router.push("/");
}
const email = ref("");
const password = ref("");
const swal = inject("$swal");

const Login = async () => {
  try {
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "customer/login",
      {
        email: email.value,
        password: password.value,
      }
    );
    console.log(res.status);
    if (res.status === 200) {
      swal({
        title: "Login Success",
        text: "You have successfully logged in",
        icon: "success",
        button: "OK",
      });
      localStorage.setItem("token", res.data.token);
      router.push("/");
    } else {
      throw new Error("Gagal login");
    }
  } catch (error) {
    alert("Email atau Password Salah");
    email.value = "";
    password.value = "";
  }
};
</script>
<style >
</style>