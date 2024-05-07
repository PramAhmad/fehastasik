
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
              <h2 class="text-6xl font-bold text-white sm:text-3xl">
                Hastasik
              </h2>

              <p class="max-w-xl mt-3 text-gray-300">
                E-Commerce Lokal Tasikmalaya Guna Memfasilitasi Penjualan
                Kerajinan Khas Tasikmalaya Dan Mempromosikan Budaya Tasikmalaya
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <div class="flex justify-center mx-auto">
                <img
                  class="w-44 md:h-20 sm:h-8"
                  src="../assets/hastasik.png"
                  alt=""
                />
              </div>

              <p class="mt-3 text-gray-500">Daftar Untuk Membuat Akun</p>
            </div>

            <div class="mt-8">
              <form>
                <!-- name -->
                <div>
                  <label for="nama" class="block mb-2 text-sm text-gray-600"
                    >Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    v-model="nama"
                    id="nama"
                    placeholder="Nama "
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
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
                  <label for="nama" class="block mb-2 text-sm text-gray-600"
                    >Nama Lengkap</label
                  >
                  <input
                    type="text"
                    name="nama"
                    v-model="namalengkap"
                    id="nama"
                    placeholder="Nama Lengkap"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
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

                <div class="mt-6">
                  <label for="photo" class="block mb-2 text-sm text-gray-600"
                    >Photo</label
                  >
                  <input
                    type="file"
                    name="photo"
                    @change="handlePhoto"
                    id="photo"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600"
                      >Password</label
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
                    @click.prevent="Register"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Sudah Punya Akun
                <router-link
                  to="/login"
                  class="text-sky-500 focus:outline-none focus:underline hover:underline"
                  >Sign In</router-link
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
import axios from "axios";
import { inject, ref } from "vue";
const email = ref("");
const password = ref("");
const nama = ref("");
const no_hp = ref("");
const photo = ref(null);
const namalengkap = ref("");
const swal = inject("$swal");
const handlePhoto = (e) => {
  photo.value = e.target.files[0];
};
const Register = async () => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "customer/register",
      {
        email: email.value,
        password: password.value,
        name: nama.value,
        nama_lengkap: namalengkap.value,
        phone_number: no_hp.value,
        photo: photo.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status == 200) {
      swal("Register Berhasil", "Silahkan Login", "success");
      router.push("/login");
    } else {
      swal("Register Gagal", "Silahkan Coba Lagi", "error");
      email.value = "";
      password.value = "";
      nama.value = "";
      namalengkap.value = "";
      no_hp.value = "";
      photo.value = null;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="">
</style>