<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      v-bind="$attrs"
      class="w-5 h-5 bg-red-500"
    >
      <use
        :id="icon"
        :xlink-href="linkHref"
        :fill="color"
        width="100%"
        height="100%"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import icons from "@/assets/icons/bundle.svg";

interface Props {
  icon: string;
  color: string;
}

const { color, icon } = defineProps<Props>();

const linkHref = computed(() => `${icons}#${icon}`);
</script>
