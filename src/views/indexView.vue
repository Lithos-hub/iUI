<template>
	<div>
		<div class="hero h-screen w-screen flex flex-col gap-10 justify-center items-center z-50">
			<h1 class="text-[200px] font-bold text-black">IUI</h1>
			<RouterLink
				:to="{
					name: 'iui:summary',
				}">
				<Button variant="synth">Get started</Button>
			</RouterLink>
			<h2 class="text-[25px] text__gradient--primary font-light">
				A Vue 3 UI portfolio built with Vite and TypeScript
			</h2>
		</div>
		<div class="dotted-background" />
	</div>
</template>

<script setup lang="ts">
import Button from '@/shared/iui-button/iui-button.vue';
</script>

<style lang="scss" scoped>
.hero {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}

.dotted-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(rgba(133, 45, 184, 0.322) 1px, transparent 1px);
	background-size: 50px 50px;
	animation: background-motion 10s linear infinite;
	z-index: 0;
}

@keyframes background-motion {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 0px 200px;
	}
}

h1 {
	filter: drop-shadow(2.5px 2.5px #e11d48) drop-shadow(-2.5px -2.5px #06b6d4);
}
</style>
