<template>
  <ul>
    <li
      class="accordion__title text-xl p-2.5 px-5 w-full items-center cursor-pointer flex justify-between uppercase border-b border-primary/10"
      @click="toggle"
    >
      <span>{{ title }}</span>
      <Bundle
        icon="chevron"
        :color="getTailwindHexColor"
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
import { computed, ref } from "vue";

import { NavegableItem } from "@/interfaces";

import Bundle from "@/assets/icons/bundle.vue";

import { TAILWIND_COLORS } from "@/constants";

interface Props {
  items: NavegableItem[];
  title: string;
  color: string;
}

const { color } = defineProps<Props>();

const isOpened = ref(false);

const toggle = () => (isOpened.value = !isOpened.value);

const getTailwindHexColor = computed(
  () => TAILWIND_COLORS[`${color}-500` as keyof typeof TAILWIND_COLORS]
);
const getHoverTextTailwindHexColor = computed(
  () => TAILWIND_COLORS[`${color}-200` as keyof typeof TAILWIND_COLORS]
);
const getHoverBackgroundTailwindHexColor = computed(
  () => `${getTailwindHexColor.value}10`
);
</script>

<style lang="scss" scoped>
.sideMenu-link {
  @apply p-2 pl-5 block font-semibold rounded-full hover:text-white;
}

.accordion__title {
  color: v-bind(getTailwindHexColor);

  &:hover {
    color: v-bind(getHoverTextTailwindHexColor);
    background: v-bind(getHoverBackgroundTailwindHexColor);
  }
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
