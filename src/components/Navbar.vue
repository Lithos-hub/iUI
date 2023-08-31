<template>
  <nav
    class="py-1 flex items-center bg-primary/10 justify-between backdrop-blur relative text-primary"
  >
    <small class="my-1 py-1 px-2.5 ml-5 bg-primary/10 text-cyan-200 rounded-full">
      v{{ version }}
    </small>

    <div class="flex flex-row justify-around">
      <router-link
        v-for="{ text, to } of menuItems"
        :to="to"
        class="mx-2 my-auto hover:text-white"
      >
        {{ text }}
      </router-link>
      <a
        href="https://github.com/Lithos-hub/iCompose-v2"
        target="_blank"
        class="mx-2 my-auto"
      >
        <i class="fa-brands fa-github text-[20px] hover:text-indigo-800"></i>
      </a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const version = "0.1.0";

const menuItems = [
  {
    text: "Summary",
    to: "/iui/summary",
  },
  {
    text: "About iUI",
    to: "/about",
  },
];
</script>
