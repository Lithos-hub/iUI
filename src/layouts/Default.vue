<template>
  <div class="flex flex-col">
    <header class="sticky top-0 w-full mx-auto z-40 shadow-xl">
      <Navbar />
    </header>
    <main class="grid grid-cols-12 gap-5 relative max-h-[calc(100vh-64px)] py-10 overflow-y-auto">
      <Sidemenu class="col-span-2" />
      <div
        class="col-span-10 container relative text-white p-10 bg-[#13101270] rounded-[25px]"
      >
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Sidemenu from "@/components/Sidemenu.vue";
</script>
