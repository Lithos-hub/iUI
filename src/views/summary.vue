<template>
  <section class="flex flex-col gap-5">
    <h2 class="text__gradient--primary text-3xl">Button</h2>
    <article class="flex flex-wrap gap-10">
      <Button
        v-for="{ variant, text, disabled, size } of buttons"
        :variant="variant"
        :disabled="disabled"
        :size="size"
      >
        {{ text }}
      </Button>
    </article>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components";

interface IButton {
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  text: string;
}

const buttons: IButton[] = [
  {
    variant: "primary",
    text: "Button primary",
  },
  {
    variant: "secondary",
    text: "Button secondary",
  },
  {
    variant: "tertiary",
    text: "Button tertiary",
  },
  {
    disabled: true,
    text: "Button disabled",
  },
  {
    size: "small",
    text: "Button small",
  },
  {
    size: "medium",
    text: "Button medium",
  },
  {
    size: "large",
    text: "Button large",
  },
];
</script>

<style scoped></style>
