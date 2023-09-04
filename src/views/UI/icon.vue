<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-5xl">Icon</h2>
    <h3 class="text-xl text-gray-200">
      The Icon component is a wrapper around the SVG element. It allows you to
      use SVG icons in your application easily.
    </h3>
    <hr />
    <div
      v-for="{ type, description, components_props } of ICONS_VIEW"
      class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]"
    >
      <h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>
      <p class="component__details--description" v-html="description" />

      <div class="flex flex-col gap-5 my-5">
        <div class="flex flex-wrap gap-5">
          <div v-for="props of components_props" class="flex flex-col gap-5">
            <Icon v-bind="props" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script script setup lang="ts">
import { ICONS_VIEW } from "@/constants";
import { Icon } from "@/components";
</script>
