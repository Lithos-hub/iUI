<template>
	<section class="flex flex-col gap-5 items-center">
		<h2 class="text-3xl font-bold">IUI Playground Components</h2>

		<Input
			v-model="search"
			type="text"
			placeholder="Search..."
			class="w-full p-2 rounded-md"
			@update="($event) => (search = $event.target.value)" />

		<div class="grid grid-cols-2 gap-10 w-full">
			<RouterLink
				v-for="({ components, category, to }, i) of filteredComponents"
				:key="i"
				:to="{
					name: to,
				}"
				class="hover:scale-105 hover:shadow-2xl hover:brightness-125 transition-all relative">
				<Card>
					<template #header>
						<h2 class="p-2 px-5">{{ category }}</h2>
					</template>
					<template #body>
						<div
							v-if="category !== 'Alert'"
							:class="`${
								category === 'Divider' || category === 'Progress'
									? 'w-full'
									: 'flex flex-col lg:flex-row gap-5'
							}`">
							<div v-for="({ component, props }, j) of components" :key="j">
								<component :is="component" v-bind="props" />
							</div>
						</div>
						<div v-else class="flex flex-col gap-5 w-full">
							<Alert
								v-for="({ props }, j) of components"
								:key="j"
								v-bind="{
									...props,
									open: true,
								}" />
						</div>
					</template>
				</Card>
			</RouterLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import Card from '@/components/base/BaseCard.vue';
import Input from '@/components/base/BaseInput.vue';

import Alert from '@/shared/iui-alert/iui-alert.vue';

import { playgroundComponents } from '@/constants/playground';

const search = ref('');
const filteredComponents = computed(() => {
	return playgroundComponents.filter(({ category }) => {
		return search.value ? category.toLowerCase().includes(search.value.toLowerCase()) : true;
	});
});
</script>
