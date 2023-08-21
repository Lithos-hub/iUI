<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      v-bind="$attrs"
    >
      <use
        :id="icon"
        :xlinkHref="`${icons}#${icon}`"
        :fill="color"
        width="100%"
        height="100%"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import icons from "@/assets/icons/icons.svg";

interface Props {
  icon: string;
  color: string;
}

const { color } = defineProps<Props>();
</script>

<style scoped></style>
