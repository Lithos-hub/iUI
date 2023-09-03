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
    <article class="flex flex-wrap items-center gap-10">
      <div
        class="flex flex-col gap-2.5 justify-center items-center border border-white/10 p-2 min-w-[100px]"
        v-for="props of ICONS_SUMMARY"
      >
        <Icon v-bind="props" class="w-10 h-10" />
        <span>{{ props.icon }}</span>
      </div>
    </article>

    <!-- BADGES -->
    <strong class="text-primary text-xl">Badges</strong>
    <article class="flex flex-wrap items-center gap-10">
      <Badge v-for="props of BADGES_SUMMARY" v-bind="props">
        <Icon v-bind="props" class="w-10 h-10" />
      </Badge>
    </article>
  </section>
</template>

<script setup lang="ts">
import { Button, Icon, Badge } from "@/components";
import { BUTTONS_SUMMARY, ICONS_SUMMARY, BADGES_SUMMARY } from "@/constants";
</script>
