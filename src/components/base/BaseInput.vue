<template>
	<input v-model="modelValue" type="text" placeholder="Search a component" class="input" />
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel();
</script>

<style lang="scss" scoped>
.input {
	@apply bg-dark/50 rounded-lg p-5 w-full border border-transparent transition-all focus:border-slate-50/10 focus:border focus:outline-none;
}
</style>
