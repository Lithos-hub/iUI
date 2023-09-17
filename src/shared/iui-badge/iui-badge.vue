<template>
	<div class="relative">
		<div class="relative">
			<div
				:class="`badge ${dot ? 'badge__dotted' : ''}`"
				:style="{ background: getTailwindHexColor }">
				<div v-if="!dot && content" class="text-sm">
					<small>{{ getFormattedContent }}</small>
				</div>
			</div>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { TAILWIND_COLORS } from '@/constants';

import { Badge } from './iui-badge.interfaces';

const { badgeColor, dot, content } = withDefaults(defineProps<Badge>(), {
	badgeColor: 'red',
});

const getTailwindHexColor = computed(
	() => TAILWIND_COLORS[`${badgeColor}-500` as keyof typeof TAILWIND_COLORS],
);

const getFormattedContent = computed(() => {
	if (!content) {
		return '';
	}

	return Number(content) > 9 ? '9+' : content;
});
</script>

<style lang="scss" scoped>
.badge {
	@apply absolute -top-1 -right-1 rounded-full w-5 h-5 flex flex-col justify-between items-center;
	animation: pulse 1.5s infinite;
}

.badge__dotted {
	@apply w-2 h-2;
}

@keyframes pulse {
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 v-bind(getTailwindHexColor);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
}
</style>
