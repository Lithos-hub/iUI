<template>
	<div class="flex flex-col">
		<header class="sticky top-0 w-full z-40 shadow-xl">
			<Navbar />
		</header>
		<main class="relative overflow-y-auto w-[80vw] p-10 mx-auto">
			<div class="relative text-white">
				<RouterView />
			</div>
		</main>
	</div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/base/BaseNavbar.vue';
</script>
