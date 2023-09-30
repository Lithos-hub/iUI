<template>
	<div ref="slotRef" class="skeleton__wrapper flex flex-col gap-5">
		<div v-for="(slot, i) of distribution" :key="i" :class="`skeleton skeleton__${slot}`">
			<slot :name="slot" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, useSlots } from 'vue';

const { distribution } = defineProps<{
	distribution: string[];
}>();

const slots = useSlots()

const cleanInnerHTMLContent = () => {
	const skeletons = document.querySelectorAll('.skeleton');

	for (const skeleton of skeletons) {
		skeleton.innerHTML = '';
	}
};

onMounted(() => {
	cleanInnerHTMLContent()
	console.log({...slots})
	});
</script>

<style lang="scss" scoped>
@keyframes skeleton {
	0% {
		background-position: -200%;
	}
	100% {
		background-position: 200%;
	}
}

.skeleton {
	&__wrapper {
		@apply bg-dark/50 p-5 rounded-lg;

		& > * {
			@apply bg-slate-500/10 rounded-full px-4 py-1;
			animation: skeleton 1s ease-in-out infinite;
			background-image: linear-gradient(
				90deg,
				rgba(255, 255, 255, 0.1) 0px,
				rgba(255, 255, 255, 0.2) 40px,
				rgba(255, 255, 255, 0.1) 80px
			);
			background-size: 200%;
		}
	}
	&__title {
		@apply w-1/2 h-10;
	}

	&__description {
		@apply w-full h-20 rounded-md;
	}

	&__content {
		@apply w-full h-full rounded-md;
	}

	&__actions {
		@apply h-12 w-[100px] rounded-md self-end;
	}

	&__article {
		@apply w-full h-5;
	}

	&__avatar {
		@apply w-12 h-auto aspect-square;
	}

	&__button {
		@apply w-1/3 h-10;
	}

	&__card {
		@apply w-full h-40;
	}

	&__card-avatar {
		@apply w-full h-20;
	}

	&__chip {
		@apply w-1/3 h-10;
	}

	&__date-picker {
		@apply w-full h-10;
	}

	&__date-picker-options {
		@apply w-full h-10;
	}

	&__date-picker-days {
		@apply w-full h-10;
	}

	&__divider {
		@apply w-full h-1;
	}

	&__heading {
		@apply w-full h-10;
	}

	&__image {
		@apply w-full h-32 rounded-md;
	}

	&__list-item {
		@apply w-full h-10;
	}

	&__list-item-avatar {
		@apply w-full h-10;
	}

	&__list-item-two-line {
		@apply w-full h-20;
	}

	&__list-item-avatar-two-line {
		@apply w-full h-20;
	}

	&__list-item-three-line {
		@apply w-full h-28;
	}

	&__list-item-avatar-three-line {
		@apply w-full h-28;
	}

	&__ossein {
		@apply w-full h-5;
	}

	&__paragraph {
		@apply w-full h-5;
	}

	&__sentences {
		@apply w-full h-5;
	}

	&__subtitle {
		@apply w-full h-5;
	}

	&__table {
		@apply w-full h-40;
	}

	&__table-heading {
		@apply w-full h-10;
	}

	&__table-thead {
		@apply w-full h-10;
	}

	&__table-tbody {
		@apply w-full h-10;
	}

	&__table-tfoot {
		@apply w-full h-10;
	}

	&__table-row-divider {
		@apply w-full h-1;
	}

	&__table-row {
		@apply w-full h-10;
	}

	&__table-cell {
		@apply w-full h-10;
	}

	&__text {
		@apply w-full h-5;
	}
}
</style>
