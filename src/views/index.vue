<template>
	<div
		class="h-screen w-screen flex flex-col gap-10 justify-center items-center"
	>
		<h1
			class="text-[200px] text__gradient--primary font-bold background-motion"
		>
			iUI
		</h1>
		<RouterLink
			:to="{
				name: 'iui:summary',
			}"
		>
			<Button>Get started</Button>
		</RouterLink>
		<h2 class="text-primary font-light">
			A Vue 3 UI portfolio built with Vite and TypeScript
		</h2>
	</div>
</template>

<script setup lang="ts">
import { Button } from '@/components';
</script>
