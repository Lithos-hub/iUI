<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Icon"
			description="The Icon component is a wrapper around the SVG element. It allows you to
      use SVG icons in your application easily."
		/>
		<div
			v-for="({ type, description, components_props }, i) of ICONS_VIEW"
			:key="i"
			class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]"
		>
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="flex flex-wrap gap-5">
					<div
						v-for="(props, j) of components_props"
						:key="j"
						class="flex flex-col gap-5"
					>
						<Icon v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { ICONS_VIEW } from '@/constants';
import { Icon, DetailsHeader, ComponentDescription } from '@/components';
</script>
