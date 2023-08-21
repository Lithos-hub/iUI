<template>
  <div class="flex flex-col flex-grow">
    <header class="sticky top-0 w-full z-50">
      <Navbar />
    </header>
    <main class="flex flex-1">
      <Sidemenu class="w-[250px] mr-[50px]" />
      <div class="flex-1 container relative mx-auto">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Sidemenu from "@/components/Sidemenu.vue";
</script>
