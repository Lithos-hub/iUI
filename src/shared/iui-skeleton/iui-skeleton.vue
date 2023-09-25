<template>
	<div ref="slotRef" class="skeleton__wrapper flex flex-col gap-5">
		<div class="skeleton__title">
			<slot name="title" />
		</div>
		<div class="skeleton__description">
			<slot name="description" />
		</div>
		<div class="skeleton__content">
			<slot name="content" />
		</div>
	</div>
</template>

<script script lang="ts">
import { onMounted, ref } from 'vue';

// clean the innerHTML content

const slotRef = ref<HTMLElement | null>(null);

const cleanInnerHTMLContent = () => {
	const nodes = slotRef.value?.childNodes;

	for (const node of nodes!) {
		node.textContent = ''; // TODO
	}
};

onMounted(() => cleanInnerHTMLContent());
</script>

<style lang="scss" scoped>
.skeleton__wrapper {
	@apply bg-primary/10 p-5 rounded-lg;

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

@keyframes skeleton {
	0% {
		background-position: -200%;
	}
	100% {
		background-position: 200%;
	}
}
</style>
