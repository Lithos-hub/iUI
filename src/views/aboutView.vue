
<template>
	<div class="flex flex-col gap-5">
		<h2 class="text-6xl text-center">IUI</h2>
		<hr class="opacity-10" />
		<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-5 rounded-2xl">
			<ul class="text-xs lg:text-base flex flex-col gap-10 justify-center items-center">
				<li>
					iUI is a UI components portfolio made with Vue 3, TypeScript, Vite 4, SASS and Tailwind.
				</li>
				<li>
					Explore them from the <code>/iui/playground</code> route. 👀 
				</li>
				<li class="flex flex-col gap-5 justify-center items-center">
					This project is still under development, is open source and you can contribute to it by making a pull request on the
					GitHub repository 🚀

					<a href="https://github.com/Lithos-hub/iUI" target="_blank" class="hover:scale-110 transition-all">
						<Icon icon="github" class="w-14 h-14" />
					</a>
				</li>
				<li>
					For now, this is only a UI components portfolio, not a components library or framework, but could be in the future using a monorepo approach.
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import Icon from '@/shared/iui-icon/iui-icon.vue';
</script>
