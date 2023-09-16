<template>
	<div class="relative py-5">
		<div :class="dividerClasses" :style="{ borderBottom: `1px solid ${getTailwindHexColor}` }" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Divider } from './iui-divider.interfaces';
import { TAILWIND_COLORS } from '@/constants';

const { orientation, variant, color } = withDefaults(defineProps<Divider>(), {
	orientation: 'horizontal',
	variant: 'solid',
	color: 'white',
})


const dividerClasses = computed(() => {
	return [
		'border-b',
		'opacity-75',
		orientation === 'horizontal' ? 'w-full h-[1px]' : 'absolute top-0 h-full w-[1px] border-r border-b-none',
		variant === 'solid' ? 'border-solid' : variant === 'dashed' ? 'border-dashed' : 'border-dotted',
	];
});

const getTailwindHexColor = computed(
	() => TAILWIND_COLORS[`${color}-500` as keyof typeof TAILWIND_COLORS],
);

</script>

<style lang="scss" scoped></style>
