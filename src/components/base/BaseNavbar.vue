<template>
	<nav
		class="py-1 flex items-center bg-primary/10 justify-between backdrop-blur relative text-primary">
		<small class="my-1 py-1 px-2.5 ml-5 bg-primary/10 text-cyan-200 rounded-full">
			v{{ version }}
		</small>

		<div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
			<RouterLink to="/">
				<p>iUI</p>
			</RouterLink>
		</div>

		<div class="flex flex-row justify-around">
			<RouterLink
				v-for="({ text, to }, i) of menuItems"
				:key="i"
				:to="to"
				class="mx-2 my-auto hover:text-white">
				{{ text }}
			</RouterLink>
			<a href="https://github.com/Lithos-hub/iCompose-v2" target="_blank" class="mx-2 my-auto">
				<i class="fa-brands fa-github text-[20px] hover:text-indigo-800"></i>
			</a>
		</div>
	</nav>
</template>

<script lang="ts" setup>
const version = '0.2.0';

const menuItems = [
	{
		text: 'Summary',
		to: '/iui/summary',
	},
	{
		text: 'About iUI',
		to: '/iui/about',
	},
];
</script>
