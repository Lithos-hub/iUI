<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <h1 class="text-[200px]">
      <span class="text-white">i</span>
      <span class="text__gradient--primary font-semibold">UI</span>
    </h1>
    <RouterLink
      :to="{
        name: 'iui:summary',
      }"
    >
      <Button>Get started</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components";
</script>
