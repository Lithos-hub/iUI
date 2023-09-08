<template>
	<div>
		<p ref="descriptionRef" class="component__details--description" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
	description: string;
}

const { description } = defineProps<Props>();

const descriptionRef = ref<HTMLElement | null>(null);

onMounted(() => {
	if (descriptionRef.value) {
		descriptionRef.value.innerHTML = description;
	}
});
</script>

<style scoped></style>
