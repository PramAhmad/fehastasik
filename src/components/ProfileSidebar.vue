<template>
  <div>
    <aside class="md:flex md:w-64 md:flex-shrink-0">
      <div class="flex flex-col w-full">
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 bg-sky-500"
        >
          <h1
            class="text-lg font-semibold text-white"
            v-if="profile && profile['1']"
          >
            Hi, {{ profile["1"].nama_lengkap }}
          </h1>
        </div>
        <nav class="flex-grow md:px-4 pb-4 bg-white">
          <a
            href="#"
            class="block px-4 py-5 text-sm font-semibold text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Link #1</a
          >
          <a
            href="#"
            class="block px-4 py-5 text-sm font-semibold text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Link #2</a
          >
          <a
            href="#"
            class="block px-4 py-5 text-sm font-semibold text-gray-900 bg-transparent border border-gray-200 hover:bg-gray-200"
            >Link #3</a
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