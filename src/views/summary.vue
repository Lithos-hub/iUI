<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-3xl font-bold">Components summary</h2>
    <strong class="text-primary text-xl">Button</strong>
    <article class="flex flex-wrap justify-stretch items-center gap-10">
      <Button v-for="props of BUTTONS" v-bind="props">
        {{ props.text }}
      </Button>
    </article>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components";
import { BUTTONS } from "@/constants";
</script>
