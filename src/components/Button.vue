<template>
  <div>
    <button
      v-bind="disabled"
      :class="`button button__${computedVariant} button__${size}`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes, computed } from "vue";

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  icon?: boolean;
}

const { variant, disabled } = withDefaults(defineProps<Props>(), {
  variant: "primary",
  disabled: false,
  size: "medium",
});

const computedVariant = computed(() => (disabled ? "disabled" : variant));
</script>

<style lang="scss" scoped>
.button {
  @apply text-white rounded-md hover:opacity-90 transition-all duration-200 ease-in-out;
}

.button__primary {
  @apply bg-primary;
}

.button__secondary {
  @apply bg-secondary;
}

.button__tertiary {
  @apply bg-none border;
}

.button__disabled {
  @apply bg-slate-600 text-slate-400 cursor-default hover:opacity-100;
}

.button__small {
  @apply px-3 py-1.5 text-sm;
}

.button__medium {
  @apply px-4 py-2 text-base;
}

.button__large {
  @apply px-5 py-2.5 text-lg;
}
</style>
