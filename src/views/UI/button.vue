<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-5xl">Button</h2>
    <h3 class="text-xl text-gray-200">
      The Button component is used to trigger an action or event, such as
      submitting a form, opening a dialog, canceling an action, or performing a
      delete operation.
    </h3>
    <hr />
    <div
      v-for="{ type, description, components_props } of BUTTONS_VIEW"
      class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]"
    >
      <h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>
      <p class="component__details--description" v-html="description" />

      <div class="flex flex-col gap-5 my-5">
        <div class="flex flex-wrap gap-5">
          <div
            v-for="{ text, ...props } of components_props"
            class="flex flex-col gap-5"
          >
            <Button v-bind="props">{{ text }}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script script setup lang="ts">
import { BUTTONS_VIEW } from "@/constants";
import { Button } from "@/components";
</script>
