<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Badge"
			description="The Badge component is used to display a small notification badge in the
      top-right corner of an element, such as an Badge."
		/>
		<div
			v-for="({ type, description, components_props }, i) of BADGES_VIEW"
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
						<Badge v-bind="props">
							<Icon :icon="props.icon" />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { BADGES_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Badge from '@/shared/iui-badge/iui-badge.vue';
import Icon from '@/shared/iui-icon/iui-icon.vue';
</script>
