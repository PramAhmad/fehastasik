<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <!-- chart -->

    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected
                            ? 'border-sky-500 text-sky-500'
                            : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="space-y-10 pb-8"
                  >
                    <div class="grid grid-cols-1 pr-10 p-4">
                      <div
                        v-for="item in category.featured"
                        :key="item.name"
                        class="group relative text-sm"
                      >
                        <div
                          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
                        >
                          <img
                            :src="item.imageSrc"
                            :alt="item.imageAlt"
                            class="object-cover object-center"
                          />
                        </div>
                        <router-link
                          :to="item.href"
                          class="mt-6 block font-medium text-gray-900"
                        >
                          <span
                            class="absolute inset-0 z-10"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </router-link>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                      </div>
                    </div>
                    <div
                      v-for="section in category.sections"
                      :key="section.name"
                    >
                      <p
                        :id="`${category.id}-${section.id}-heading-mobile`"
                        class="font-medium text-gray-900"
                      >
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                        class="mt-6 flex flex-col space-y-6"
                      >
                        <li
                          v-for="item in section.items"
                          :key="item.name"
                          class="flow-root"
                        >
                          <router-link
                            :to="item.href"
                            class="-m-2 block p-2 text-gray-500"
                            >{{ item.name }}</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div
                  v-for="page in navigation.pages"
                  :key="page.name"
                  class="flow-root"
                >
                  <router-link
                    :to="page.href"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >{{ page.name }}</router-link
                  >
                </div>
              </div>

              <div
                class="space-y-6 border-t border-gray-200 px-4 py-6"
                v-if="user === null"
              >
                <div class="flow-root">
                  <router-link
                    to="/login"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >Sign in</router-link
                  >
                </div>
                <div class="flow-root">
                  <router-link
                    to="/register"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >Create account</router-link
                  >
                </div>
              </div>
              <!-- saat ada user -->
              <div
                class="space-y-6 border-t border-gray-200 px-4 py-6"
                v-if="user"
              >
                <div class="flow-root">
                  <router-link
                    to="/profile"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >Profile</router-link
                  >
                </div>
                <div class="flow-root">
                  <button
                    @click="logout"
                    class="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <router-link to="#" class="-m-2 flex items-center p-2">
                </router-link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <Chart v-if="isVisibled" :status="false" />
    <header class="bg-white fixed top-0 w-full z-50">
      <nav aria-label="Top" class="max-w-7xl items-center mx-auto">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button
              type="button"
              class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              @click="open = true"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex">
              <router-link to="/">
                <img class="h-8 w-auto" src="../assets/hastasik.png" alt="" />
              </router-link>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="flex"
                  v-slot="{ open }"
                >
                  <div class="relative flex">
                    <PopoverButton
                      :class="[
                        open
                          ? 'border-sky-500 text-sky-500'
                          : 'border-transparent text-gray-700 hover:text-gray-800',
                        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                      ]"
                      >{{ category.name }}</PopoverButton
                    >
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel
                      class="absolute inset-x-0 top-full text-sm text-gray-500"
                    >
                      <div class="relative bg-white border-2 container">
                        <div class="max-w-7xl px-8 mx-auto items-center">
                          <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div class="co l-start-2 grid grid-cols-2 gap-x-8">
                              <div
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative text-base sm:text-sm"
                              >
                                <div
                                  class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
                                >
                                  <img
                                    :src="item.imageSrc"
                                    :alt="item.imageAlt"
                                    class="object-cover object-center"
                                  />
                                </div>
                                <router-link
                                  :to="item.href"
                                  class="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    class="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {{ item.name }}
                                </router-link>
                                <p aria-hidden="true" class="mt-1">
                                  Lihat Toko
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <router-link
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :to="page.href"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >{{ page.name }}</router-link
                >
              </div>
            </PopoverGroup>

            <div class="flex ml-auto">
              <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                v-if="user === null"
              >
                <router-link
                  to="/login"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >Sign in</router-link
                >
                <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                <router-link
                  to="/register"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >Create account</router-link
                >
              </div>
              <!-- saat login -->
              <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                v-if="user"
              >
                <router-link
                  to="/profile"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >Profile</router-link
                >
                <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                <button
                  @click="logout"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>

              <div class="hidden lg:ml-8 lg:flex">
                <router-link
                  to="#"
                  class="flex items-center text-gray-700 hover:text-gray-800"
                >
                </router-link>
              </div>

              <!-- Cart -->

              <div
                class="ml-4 flow-root lg:ml-6"
                v-if="route.name != `checkout`"
              >
                <button
                  @click="showChart()"
                  class="group -m-2 flex items-center p-2 mr-1"
                >
                  <ShoppingBagIcon
                    class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span
                    class="ml-2 mb-4 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                    >{{ countCart }}</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import Chart from "../components/Chart.vue";
components: {
  Chart;
}
import axios from "axios";
const isVisibled = ref(false);
import { inject, onMounted, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useRoute } from "vue-router";
const route = useRoute();
const navigation = {
  categories: [
    {
      id: "product",
      name: "Product",
      featured: [
        {
          name: "Payung Geulis",
          href: "/",
          imageSrc:
            "https://lh3.googleusercontent.com/pw/AP1GczPOxLLCAjpeU7ByyvgXxfr8EKEv0WHfMj5M5ywRc6GuFHTDTeI4v2LGTITi1PtqmOGpOg8EGlcj1bmlj3rz0p3B-PyNn4a14GqXhHE9jwJs2pG_KhXx8l4n9nRD3MlJPHG4yy94apBRMHJXDZEtcP2U=w1657-h932-s-no-gm?authuser=0",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Kelom Geulis",
          href: "/",
          imageSrc:
            "https://lh3.googleusercontent.com/pw/AP1GczOJZpl6jYTPi-xg0u9EI03GNgPAXDBdIZfz6lsjN7MeIkl2tzZMnH-z4q0LfwPK0-ae59SU3vvY4tjkpOGHpItdQAK_70N5pJvSs_khXnOa5bsCq3lsH6oT8O4R5nF3Kpdjs88_dpWCJLAqT5Eq-TKO=w1657-h932-s-no-gm?authuser=0",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
    {
      id: "seller",
      name: "Seller",
      featured: [
        {
          name: "Mbah Sadarma",
          href: "#",
          imageSrc:
            "https://lh3.googleusercontent.com/pw/AP1GczNZLmZvd7gqSOqnGAPQJmey7WCQN8poD-hbaiezj0M0VH4OEvGqNadAPKGfB6UDeZqQasHVN4MO31SbdZrWx_d7ojOfohbZaZitf1ytoH8nRQMHI7FwyWGurlM1PGPs00Nba-PnbDc0-z88PCbnbUdt=w1657-h932-s-no-gm?authuser=0",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Nyai Culias",
          href: "#",
          imageSrc:
            "https://lh3.googleusercontent.com/pw/AP1GczPjDqfrEnFcDYfLeXdjwDWBhgZOvDwqcLr-xL3dIJ-vg2tKjv_UpIyWbXdsZTqFXC-VjWXFWHDffTMNVPnvUpgpNOqs2JXPtbYp0XUxnz14aAe_V--zamxmTLkw9INBHWRJPTh1hQE4INXICWkBOU22=w1657-h932-s-no-gm?authuser=0",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "Kerajinan",
          name: "Kerajinan",
          items: [
            { name: "Payung Geulis", href: "/category/payung-geulis" },
            { name: "Samak mendong", href: "/category/samak-mending" },
            { name: "Kelom Geulis", href: "/category/kelom-geulis" },
            { name: "Batik Tasikmalaya", href: "/category/batik" },
            { name: "Anyaman Bambu", href: "/category/anyaman-bambu" },
            { name: "Kerajinan Lainya", href: "/pram" },
          ],
        },
        {
          id: "Makanan",
          name: "Makanan",
          items: [
            { name: "Saroja", href: "/category/saroja" },

            { name: "Oncom", href: "/category/oncom-tasik" },

            { name: "Raginang", href: "/category/raginang" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Ngeresik", href: "/ngeresik" },
    { name: "About Us", href: "/about" },
  ],
};
const countCart = ref(0);
const user = ref(null);
const swal = inject("$swal");
const getUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(import.meta.env.VITE_API_URL + `user`);
    user.value = res.data;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

function showChart() {
  isVisibled.value = !isVisibled.value;
}
function countChart() {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get(import.meta.env.VITE_API_URL + "customer/chart").then((res) => {
      if (res.data.data > 0) {
        countCart.value = res.data.data.length;
      } else {
        countCart.value = 0;
      }
    });
  } else {
    console.log("Token not found");
  }
}
const logout = () => {
  // apkah yakin ingin loout
  swal
    .fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.href = "/";
      } else {
        swal.fire("Cancelled", "You are still logged in", "info");
      }
    });
};
const open = ref(false);
onMounted(() => {
  countChart();
  getUser();
});
</script>
