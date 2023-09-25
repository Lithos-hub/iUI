<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Icon"
			description="The Icon component is a wrapper around the SVG element. It allows you to
      use SVG icons in your application easily." />
		<div
			v-for="({ type, description, components_props }, i) of ICON_VIEW"
			:key="i"
			class="component__details--wrapper">
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="grid grid-cols-3 gap-5">
					<div v-for="(props, j) of components_props" :key="j" class="component__details--card">
						<div>
							<code>{{ props }}</code>
						</div>
						<Icon v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { ICON_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Icon from '@/shared/iui-icon/iui-icon.vue';
</script>
