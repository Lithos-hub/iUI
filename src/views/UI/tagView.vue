<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Tag"
			description="The Tag component is used to highlight small pieces of information" />
		<div
			v-for="({ type, description, components_props }, i) of TAG_VIEW"
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
						<Tag v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { TAG_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Tag from '@/shared/iui-tag/iui-tag.vue';
</script>
