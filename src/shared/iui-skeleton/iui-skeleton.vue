<template>
	<div ref="slotRef" class="skeleton__wrapper flex flex-col gap-5">
		<div v-for="(slot, i) of distribution" :key="i" :class="slot !== 'list' && slot !== 'table' && `skeleton skeleton__${slot}` ">
			<div v-if="slot === 'list'" data-testid="iui-skeleton__list" class="flex flex-col gap-2 p-2">
				<div  class="skeleton skeleton__list--item bg-dark/50 rounded-full" />
				<div  class="skeleton skeleton__list--item bg-dark/50 rounded-full" />
				<div  class="skeleton skeleton__list--item bg-dark/50 rounded-full" />
			</div>
			<div v-if="slot === 'table'" data-testid="iui-skeleton__table" class="skeleton grid grid-cols-3 gap-1 p-1">
				<div v-for="n in 9" :key="n" class="skeleton__table--item bg-dark/50 p-5 rounded-md" />
			</div>
			<div v-else>
				<slot :name="slot" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { SkeletonSlots, DistributionSlot } from './iui-skeleton.interfaces';

const { distribution } = defineProps<{
	distribution: DistributionSlot[];
}>();

defineSlots<SkeletonSlots>()
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
			@apply rounded-md;
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
		@apply w-1/2 h-10 rounded-full;
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
		@apply w-12 h-auto aspect-square rounded-full;
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
		@apply w-full h-[2px];
	}

	&__heading {
		@apply w-full h-10;
	}

	&__image {
		@apply w-full h-32 rounded-md;
	}

	&__list-item {
		@apply w-full h-2;
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
		@apply w-full h-40 rounded-md;
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
