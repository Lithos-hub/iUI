<template>
	<div>
		<input v-model="modelValue" type="text" placeholder="Search a component" class="input" />
	</div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel<string>();
</script>

<style lang="scss" scoped>
.input {
	@apply bg-dark/50 rounded-lg p-5 w-full border-transparent transition-all focus:border-slate-50/10 focus:border outline-none;
}
</style>
