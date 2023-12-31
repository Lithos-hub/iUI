<template>
	<ul>
		<li
			class="accordion__title text-xl p-2.5 px-5 w-full items-center cursor-pointer flex justify-between uppercase border-b border-primary/10"
			@click="toggle">
			<span>{{ title }}</span>
			<Icon
				icon="chevron"
				:color="getTailwindHexColor"
				:class="`h-5 w-5 transition-all ${isOpened && 'rotate-180'}`"/>
		</li>
		<div v-if="isOpened">
			<li v-for="({ text, to }, i) of items" :key="i">
				<RouterLink
					:to="to!"
					class="sideMenu-link flex items-center transition-all"
					active-class="bg-primary/10 text-white">
					<small>{{ text }}</small>
				</RouterLink>
			</li>
		</div>
	</ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { ColorName, NavegableItem } from '@/interfaces';
import { TAILWIND_COLORS } from '@/constants';

import Icon from '@/shared/iui-icon/iui-icon.vue';

interface Props {
	items: NavegableItem[];
	title: string;
	color: string;
}

const { color } = defineProps<Props>();

const isOpened = ref(false);

const toggle = () => (isOpened.value = !isOpened.value);

const getTailwindHexColor = computed(
	() => TAILWIND_COLORS[`${color}-500` as keyof typeof TAILWIND_COLORS] as ColorName,
);
const getHoverTextTailwindHexColor = computed(
	() => TAILWIND_COLORS[`${color}-200` as keyof typeof TAILWIND_COLORS],
);
const getHoverBackgroundTailwindHexColor = computed(() => `${getTailwindHexColor.value}10`);
</script>

<style lang="scss" scoped>
.sideMenu-link {
	@apply p-2 pl-5 block font-semibold hover:text-secondary;
}

.accordion__title {
	color: v-bind(getTailwindHexColor);

	&:hover {
		filter: brightness(1.2);
		color: v-bind(getHoverTextTailwindHexColor);
		background: v-bind(getHoverBackgroundTailwindHexColor);
	}
}

.fadeIn {
	animation: fadeIn 1s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
