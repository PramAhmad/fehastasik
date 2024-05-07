<template >
  <div>
    <Navbar />
    <div class="container mx-auto">
      <div class="pt-20">
        <div class="grid md:grid-cols-12 grid-cols-1">
          <!-- sidebar -->
          <div class="md:col-span-3">
            <ProfileSidebar :profile="profile" />
          </div>
          <!-- main content -->
          <div class="md:col-span-9">
            <div class="p-4 bg-white rounded shadow">
              <h2 class="text-xl font-bold mb-4">My Order</h2>
              <!-- table for order -->
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead>
                    <tr>
                      <th class="px-4 py-2">No</th>
                      <th class="px-4 py-2">Order ID</th>
                      <th class="px-4 py-2">Product</th>
                      <th class="px-4 py-2">Price</th>
                      <th class="px-4 py-2">Status</th>
                      <th class="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />    
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import ProfileSidebar from "../components/ProfileSidebar.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
</script>
<style lang="">
</style>