<template>
	<div>
		<div class="hero h-screen w-screen flex flex-col gap-10 justify-center items-center z-50">
			<h1
				class="text-[200px] font-bold"
				:class="onButtonHover ? 'synthwave-title' : 'default-title'">
				IUI
			</h1>
			<RouterLink
				:to="{
					name: 'iui:playground',
				}">
				<Button
					variant="synth"
					@mouseover="onButtonHover = true"
					@mouseleave="onButtonHover = false">
					Get started
				</Button>
			</RouterLink>
			<h2 class="text-[20px] text-primary flex items-center gap-1">
				UI portfolio made with
				<Icon icon="vue" class="h-10 w-10" />
				<Icon icon="vite" class="h-10 w-10" />
				<Icon icon="typescript" class="h-8 w-10" />
			</h2>
		</div>
		<div class="dotted-background" />
	</div>
</template>

<script setup lang="ts">
import Button from '@/shared/iui-button/iui-button.vue';
import Icon from '@/shared/iui-icon/iui-icon.vue';
import { ref } from 'vue';

const onButtonHover = ref(false);
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

.default-title {
	@apply text-black;
	filter: drop-shadow(2.5px 2.5px #e11d48) drop-shadow(-2.5px -2.5px #06b6d4);
}

.synthwave-title {
	@apply text-white transition-all;
	text-shadow:
		0px 0px 5px white,
		0px 0px 20px magenta,
		0px 0px 50px blue;
	filter: drop-shadow(2.5px 2.5px #e11d48) drop-shadow(-2.5px -2.5px #06b6d4);
	animation: title-motion 1s linear infinite;
}
</style>
