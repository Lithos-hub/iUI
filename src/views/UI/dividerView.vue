<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader title="Divider" description="The Divider component is used to divide section, list items or any other element" />
		<div
			v-for="({ type, description, components_props }, i) of DIVIDER_VIEW"
			:key="i"
			class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]">
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col my-5">
				<div v-for="(props, j) of components_props" :key="j">
					<Divider v-bind="props" />
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { DIVIDER_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Divider from '@/shared/iui-divider/iui-divider.vue';
</script>
