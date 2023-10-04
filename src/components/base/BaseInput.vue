<template>
	<input
		:value="modelValue"
		type="text"
		placeholder="Search a component"
		class="input"
		@input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />
</template>

<script setup lang="ts">
const { modelValue } = defineProps<{
	modelValue: string;
}>();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.input {
	@apply bg-dark/50 rounded-lg p-5 w-full border border-transparent transition-all focus:border-slate-50/10 focus:border focus:outline-none;
}
</style>
