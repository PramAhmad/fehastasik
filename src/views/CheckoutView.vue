<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="md:flex w-full md:flex-wrap md:justify-center">
        <!-- addres card -->

        <!-- product card -->

        <!-- price count and pament info -->
      </div>
    </div>
  </div>
</template>
<script setup>
if (!localStorage.getItem("token")) {
  window.location.href = "/login";
}
import Navbar from "../components/Navbar.vue";
</script>
<style lang="">
</style>