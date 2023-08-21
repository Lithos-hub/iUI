<template>
  <ul>
    <li
      class="text-white text-xl font-bold mb-3 p-5 cursor-pointer hover:bg-secondary/10 flex justify-between"
      @click="toggle"
    >
      {{ title }}
      <Icon icon="chevron" color="white" class="h-8 w-8" />
    </li>
    <div v-if="isOpened">
      <li v-for="{ text, to } of items">
        <RouterLink
          :to="to!"
          class="sideMenu-link flex items-center"
          active-class="bg-primary text-white"
        >
          <span>{{ text }}</span>
        </RouterLink>
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { NavegableItem } from "@/interfaces";

import { Icon } from "@/components";

interface Props {
  items: NavegableItem[];
  title: string;
}

defineProps<Props>();

const isOpened = ref(false);

const toggle = () => (isOpened.value = !isOpened.value);
</script>

<style lang="scss" scoped>
.sideMenu-link {
  @apply px-5 py-2.5 block font-semibold hover:bg-primary/10 hover:text-white;
}

.fadeIn {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
