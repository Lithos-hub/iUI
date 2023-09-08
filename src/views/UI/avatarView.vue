<template>
	<div class="flex flex-col gap-5">
		<Header
			title="Avatar"
			description="The Avatar component shows a text, icon or image with a specific size and full rounded shape."
		/>
		<div
			v-for="({ type, description, components_props }, i) of AVATARS_VIEW"
			:key="i"
			class="flex flex-col gap-5 p-10 bg-primary/10 border border-primary/50 rounded-[25px]"
		>
			<h3 class="text-2xl text-gray-200 font-bold uppercase">{{ type }}</h3>
			<p class="component__details--description" v-html="description" />

			<div class="flex flex-col gap-5 my-5">
				<div class="flex flex-wrap gap-5">
					<div
						v-for="(props, j) of components_props"
						:key="j"
						class="flex flex-col gap-5"
					>
						<Avatar v-bind="props" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { AVATARS_VIEW } from '@/constants';
import { Avatar, Header } from '@/components';
</script>
