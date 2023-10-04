<template>
	<div class="relative py-5">
		<div
			data-testid="iui-divider"
			:class="dividerClasses"
			:style="{
				borderBottom: mood
					? ''
					: `1px ${
							variant === 'solid' ? 'solid' : variant === 'dashed' ? 'dashed' : 'dotted'
					  } ${getTailwindColor(color)}`,
			}" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getTailwindColor } from '@/utils';
import { Divider } from './iui-divider.interfaces';

const { orientation, variant, color, mood } = withDefaults(defineProps<Divider>(), {
	orientation: 'horizontal',
	variant: 'solid',
	color: 'white',
});

const dividerClasses = computed(() => {
	return [
		'divider',
		orientation === 'horizontal'
			? 'w-full h-[1px]'
			: 'absolute top-0 h-full w-[1px] border-r border-b-none',
			mood && `divider__${mood}`,
	];
});
</script>

<style lang="scss" scoped>
.divider {
	@apply border-b;

	&__light {
		@apply opacity-75;
	}

	&__neon {
		@apply bg-white p-[1px] rounded-full;
		box-shadow:
			0 0 2px white,
			0 0 10px 1px v-bind(color);
	}

	&__synth {
		@apply bg-dark p-[2px] border-none;
		filter: drop-shadow(2px 2px #e11d48) drop-shadow(-2px -2px #06b6d4);
	}

	&__saw {
		@apply border-none;
		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 10px;
			background: radial-gradient(
				circle at 100% 0,
				transparent 0,
				transparent 10px,
				#06b6d4 1px,
				red 50px
			);
			background-size: 10px 10px;
			background-repeat: repeat-x;
			animation: saw 0.5s infinite linear;
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		}

		@keyframes saw {
			0% {
				background-position: 0 0;
			}

			100% {
				background-position: 10px 0;
			}
		}
	}
}
</style>
