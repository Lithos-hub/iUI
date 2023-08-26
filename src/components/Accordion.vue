<template>
  <ul>
    <li
      class="text-white text-xl font-bold p-2.5 w-full items-center cursor-pointer hover:bg-secondary/10 flex justify-evenly uppercase rounded-full"
      @click="toggle"
    >
      <span class="text__gradient--primary">{{ title }}</span>
      <Bundle
        icon="chevron"
        color="white"
        :class="`h-5 w-5 transition-all ${isOpened && 'rotate-180'}`"
      />
    </li>
    <div v-if="isOpened">
      <li v-for="{ text, to } of items">
        <RouterLink
          :to="to!"
          class="sideMenu-link flex items-center transition-all"
          active-class="bg-primary/10 text-white"
        >
          <small>{{ text }}</small>
        </RouterLink>
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { NavegableItem } from "@/interfaces";

import Bundle from "@/assets/icons/bundle.vue";

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
  @apply p-2 text-center block font-semibold rounded-full hover:text-white;
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
