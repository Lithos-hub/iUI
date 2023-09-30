<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Skeleton"
			description="The Skeleton component give feedback to the user when there are loading elements in the screen" />

			<div class="flex flex-col gap-5 bg-dark/10 border border-slate-500/50 rounded-lg p-10">
				<div class="w-full grid grid-cols-2 gap-5">
					<div class="flex flex-col gap-5">
						<strong>Code</strong>
						<div class="monaco-editor__example-1 h-full" />
					</div>
					<div class="flex flex-col gap-5">
						<strong>Result</strong>
						<Skeleton :distribution="['title', 'description', 'content']">
							<template #title></template>
							<template #description></template>
							<template #content></template>
						</Skeleton>
					</div>
				</div>
				<div class="w-full grid grid-cols-2 gap-5">
					<div class="flex flex-col gap-5">
						<strong>Code</strong>
						<div class="monaco-editor__example-2 h-full" />
					</div>
					<div class="flex flex-col gap-5">
						<strong>Result</strong>
						<Skeleton :distribution="['avatar', 'image', 'description', 'actions']">
							<template #avatar />
							<template #image />
							<template #description></template>
							<template #actions />
						</Skeleton>
					</div>
				</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { DetailsHeader } from '@/components';
import Skeleton from '@/shared/iui-skeleton/iui-skeleton.vue';
import loader from '@monaco-editor/loader';
import { onMounted } from 'vue';

const loadFirstExample = () => {
	const monacoDiv = document.querySelector('.monaco-editor__example-1');
	loader.init().then((monaco) => {
		monaco.editor.create(monacoDiv as HTMLDivElement, {
			value: `<Skeleton>
	<template #title></template>
	<template #description></template>
	<template #content></template>
</Skeleton>`,
			language: 'html',
			theme: 'vs-dark',
			readOnly: true,
		});
	});
};

const loadSecondExample = () => {
	const monacoDiv = document.querySelector('.monaco-editor__example-2');
	loader.init().then((monaco) => {
		monaco.editor.create(monacoDiv as HTMLDivElement, {
			value: `<Skeleton>
	<template #avatar />
	<template #image />
	<template #description />
	<template #actions />
</Skeleton>`,
			language: 'html',
			theme: 'vs-dark',
			readOnly: true,
		});
	});
};

onMounted(() => {
	loadFirstExample();
	loadSecondExample();
});
</script>

<style scoped></style>
