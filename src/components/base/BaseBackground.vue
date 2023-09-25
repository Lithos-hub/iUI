<template>
	<div>
		<div class="background__static" />
		<div class="background__dots" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.background__static {
	@apply fixed top-0 left-0 w-full h-full -z-50;

	background-position: fixed;
	background: radial-gradient(
			farthest-corner at 5% 90%,
			rgba(17, 168, 130, 0.046),
			transparent 1000px
		),
		radial-gradient(farthest-corner at 100% 100%, rgba(85, 0, 255, 0.038), transparent 20000px),
		radial-gradient(farthest-corner at 100% 0%, rgba(0, 255, 234, 0.065), transparent 20000px),
		linear-gradient(#1f0513, black);
}
.background__dots {
	@apply fixed top-0 left-0 w-full h-full -z-20;
	background-image: radial-gradient(rgba(133, 45, 184, 0.322) 1px, transparent 1px);
	background-size: 50px 50px;
	animation: background-motion 10s linear infinite;
}

@keyframes background-motion {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 0px 200px;
	}
}
</style>
