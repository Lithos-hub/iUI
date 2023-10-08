<template>
	<div class="relative">
		<div
			data-testid="iui-spinner"
			:class="`spinner min-h-[75px] min-w-[75px] spinner__indeterminate`"
			:style="{
				borderTop: `4px solid ${computedColor}`,
			}" />
		<div v-if="displayText" class="spinner__value">
			<small
				data-testid="iui-spinner__text"
				:class="`text-xs min-w-[50px] text-center`"
				:style="{
					color: computedTextColor,
				}">
				Loading...
			</small>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getTailwindColor } from '@/utils';
import { Spinner } from './iui-spinner.interfaces';

const { textColor, color } = withDefaults(defineProps<Spinner>(), {
	color: 'white',
	textColor: 'white',
});

const computedColor = computed(() => getTailwindColor(color));
const computedTextColor = computed(() => getTailwindColor(textColor));
</script>

<style lang="scss" scoped>
.spinner {
	@apply border-4 border-slate-500/10 rounded-full;

	&__indeterminate {
		animation: indeterminate 0.8s infinite linear;
	}

	&__value {
		@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
	}
}

@keyframes indeterminate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
