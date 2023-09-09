<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Button"
			description="The Button component is used to trigger an action or event, such as
      submitting a form, opening a dialog, canceling an action, or performing a
      delete operation."
		/>
		<div
			v-for="({ type, description, components_props }, i) of BUTTONS_VIEW"
			:key="i"
			class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]"
		>
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>

			<ComponentDescription :description="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="flex flex-wrap gap-5">
					<div
						v-for="({ text, ...props }, j) of components_props"
						:key="j"
						class="flex flex-col gap-5"
					>
						<Button v-bind="props">{{ text }}</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { BUTTONS_VIEW } from '@/constants';
import { Button, DetailsHeader, ComponentDescription } from '@/components';
</script>
