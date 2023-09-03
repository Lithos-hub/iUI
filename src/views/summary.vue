<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-3xl font-bold">Components summary</h2>
    <hr class="opacity-10" />
    <!-- BUTTONS -->
    <strong class="text-primary text-xl">Buttons</strong>
    <article class="flex flex-wrap justify-stretch items-center gap-10">
      <Button v-for="props of BUTTONS_SUMMARY" v-bind="props">
        {{ props.text }}
      </Button>
    </article>

    <!-- ICONS -->
    <strong class="text-primary text-xl">Icons</strong>
    <article class="flex flex-wrap justify-stretch items-center gap-10">
      <Icon v-for="props of ICONS_SUMMARY" v-bind="props" class="w-10 h-10" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { Button, Icon } from "@/components";
import { BUTTONS_SUMMARY, ICONS_SUMMARY } from "@/constants";
</script>
