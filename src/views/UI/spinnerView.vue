<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Spinner"
			description="The Spinner component shows a circular progress bar. It is used to graphically represent the state of loading or a percentage." />
		<div
			v-for="({ type, description, components_props }, i) of SPINNER_VIEW"
			:key="i"
			class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]">
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="grid grid-cols-3 gap-5">
					<div
						v-for="(props, j) of components_props"
						:key="j"
						class="flex flex-col items-center gap-5 bg-dark p-5 rounded-[25px]">
						<div>
							<code>{{ props }}</code>
						</div>
						<Spinner v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { SPINNER_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Spinner from '@/shared/iui-spinner/iui-spinner.vue';
</script>
