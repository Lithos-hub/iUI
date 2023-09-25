<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Progress"
			description="The Progress component shows a linear progress bar. It is used to graphically represent the state of loading or a percentage." />
		<div
			v-for="({ type, description, components_props }, i) of PROGRESS_VIEW"
			:key="i"
			class="component__details--wrapper">
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>
			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div v-for="(props, j) of components_props" :key="j" class="component__details--card">
					<div>
						<code>{{ props }}</code>
					</div>
					<Progress v-bind="props" />
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { PROGRESS_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Progress from '@/shared/iui-progress/iui-progress.vue';
</script>
