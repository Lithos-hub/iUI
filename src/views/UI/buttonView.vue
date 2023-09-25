<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Button"
			description="The Button component is used to trigger an action or event, such as
      submitting a form, opening a dialog, canceling an action, or performing a
      delete operation." />
		<div
			v-for="({ type, description, components_props }, i) of BUTTON_VIEW"
			:key="i"
			class="component__details--wrapper">
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="grid grid-cols-3 gap-5">
					<div
						v-for="({ text, ...props }, j) of components_props"
						:key="j"
						class="component__details--card">
						<div>
							<code>{{ props }}</code>
						</div>
						<Button v-bind="props">{{ text }}</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { BUTTON_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Button from '@/shared/iui-button/iui-button.vue';
</script>
