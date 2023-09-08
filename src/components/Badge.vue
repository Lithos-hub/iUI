<template>
	<div class="relative">
		<div class="relative">
			<div
				:class="`badge ${dot ? 'badge__dotted' : ''}`"
				:style="{ background: getTailwindHexColor }"
			>
				<div class="text-sm" v-if="!dot && content">
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
import { Badge } from '@/interfaces';

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
}

.badge__dotted {
	@apply w-2 h-2;
}
</style>
