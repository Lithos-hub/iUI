<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Avatar"
			description="The Avatar component shows a text, icon or image with a specific size and full rounded shape." />
		<div
			v-for="({ type, description, components_props }, i) of AVATAR_VIEW"
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
						<Avatar v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { AVATAR_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Avatar from '@/shared/iui-avatar/iui-avatar.vue';
</script>
