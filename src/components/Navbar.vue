<template>
  <nav
    class="py-1 flex items-center justify-between backdrop-blur relative text-primary"
  >
    <small class="py-2 px-5 ml-5 bg-primary/10 text-cyan-200 rounded-full">
      v{{ version }}
    </small>

    <div class="flex flex-row justify-around">
      <router-link
        v-for="{ text, to } of menuItems"
        :to="to"
        class="mx-2 my-auto text__gradient--primary hover:text-indigo-800"
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
