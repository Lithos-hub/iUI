<template>
	<nav
		class="py-3 px-5 flex justify-between items-center border-b border-b-slate-50/10 bg-dark/50 backdrop-blur relative text-primary">
		<RouterLink to="/">
			<h2 class="text-3xl">
				<span>I</span>
				<span class="text-red-500">UI</span>
			</h2>
		</RouterLink>

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
