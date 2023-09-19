<template>
	<div
		:class="`rounded-full relative overflow-hidden border border-slate-200/10`"
		:style="{
			width: `${computedSize}px`,
			height: `${computedSize}px`,
		}">
		<img
			v-if="image"
			:src="image"
			alt="Avatar image"
			:width="computedSize"
			:height="computedSize"
			:class="`rounded-full aspect-square object-cover`"/>
		<span
			v-else
			:class="`flex flex-col justify-center items-center w-full h-full ${computedTextSize}`"
			:style="{
				backgroundColor: getTailwindColor(color) as string,
			}">
			<div v-if="text">
				<span class="text-white">{{ text }}</span>
			</div>
			<div v-else-if="icon">
				<Icon :icon="icon" :size="computedSize" color="white" />
			</div>
		</span>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Avatar } from './iui-avatar.interfaces';
import Icon from '@/shared/iui-icon/iui-icon.vue';
import { getTailwindColor } from '@/utils';

const { image, size, icon, text } = withDefaults(defineProps<Avatar>(), {
	color: 'blue',
	size: 30,
});

const computedSize = computed(() => {
	if (Number(size) <= 80) return Number(size) * 2;

	return Number(size);
});

const computedTextSize = computed(() => {
	switch (size) {
		case 10:
			return 'text-xs';
		case 20:
			return 'text-sm';
		case 30:
			return 'text-base';
		case 40:
			return 'text-lg';
		case 50:
			return 'text-2xl';
		case 60:
			return 'text-2xl';
		case 70:
			return 'text-3xl';
		case 80:
			return 'text-4xl';
		default:
			return 'text-base';
	}
});
</script>
