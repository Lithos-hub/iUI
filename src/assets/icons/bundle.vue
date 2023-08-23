<template>
  <div v-bind="$attrs">
    <svg
      ref="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      id="bundle"
      viewBox="0 0 24 24"
    ></svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  icon: string;
  color: string;
}

interface Bundle {
  [key: string]: {
    path: () => string;
  };
}
const { icon, color } = defineProps<Props>();

const svg = ref<SVGElement | null>(null);

const icons: Bundle = {
  chevron: {
    path: () =>
      `<path d="M17 9.5L12 14.5L7 9.5" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
};

onMounted(() => (svg.value!.innerHTML = icons[icon].path()));
</script>

<style scoped></style>
