<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-3xl font-bold">Components summary</h2>
    <h3 class="text__gradient--primary text-2xl">Button</h3>
    <article class="flex flex-wrap gap-10">
      <Button
        v-for="{ variant, text, disabled, size } of BUTTONS"
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
import { BUTTONS } from "@/constants";
</script>
