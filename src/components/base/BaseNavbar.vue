<template>
	<nav
		class="py-3 px-5 flex items-center border-b border-b-slate-50/10 bg-dark/50 justify-between backdrop-blur relative text-primary">
		<div class="border__synth--light my-1 py-1 px-2.5 ml-5 bg-dark text-white rounded-full">
			<small>v{{ version }}</small>
		</div>

		<div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
			<RouterLink to="/">
				<h2 class="text-3xl">
					<span>I</span>
					<span class="text-red-500">UI</span>
				</h2>
			</RouterLink>
		</div>

		<div class="flex flex-row justify-around">
			<RouterLink
				v-for="({ text, to }, i) of menuItems"
				:key="i"
				:to="{
					name: to,
				}"
				class="mx-2 my-auto hover:text-white">
				<Button variant="synth">
					{{ text }}
				</Button>
			</RouterLink>
			<a href="https://github.com/Lithos-hub/iCompose-v2" target="_blank" class="mx-2 my-auto">
				<i class="fa-brands fa-github text-[20px] hover:text-indigo-800"></i>
			</a>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import Button from '@/shared/iui-button/iui-button.vue';
const version = '0.4.0';

const menuItems = [
	{
		text: 'Playground',
		to: 'iui:playground',
	},
	{
		text: 'About iUI',
		to: 'iui:about',
	},
];
</script>
