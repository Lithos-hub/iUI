<template>
	<div class="flex flex-col gap-5">
		<DetailsHeader
			title="Alert"
			description="The alert component is used to display feedback messages to the user about different results: success, error, warning, etc."/>
		<div
			v-for="({ type, description, components_props }, i) of computedAlerts"
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
						<Button @click="toggleAlert(i, j)">Toggle alert</Button>
						<Alert v-bind="props" @close="closeAlerts" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script script setup lang="ts">
import { ref, computed } from 'vue';
import { ALERT_VIEW } from '@/constants';
import { DetailsHeader, ComponentDescription } from '@/components';

import Button from '@/shared/iui-button/iui-button.vue';
import Alert from '@/shared/iui-alert/iui-alert.vue';

const alertsRef = ref(
	ALERT_VIEW.map(({ components_props, ...rest }) => {
		return {
			...rest,
			components_props: components_props.map((props) => {
				return { ...props, open: false }
			})
		}
	}).flat()
)

const computedAlerts = computed(() => {
	return alertsRef.value.map(({ components_props, ...rest }, alertIndex) => {
		return {
			...rest,
			components_props: components_props.map((props, index) => {
				return {
					...props,
					open: alertsRef.value[alertIndex].components_props[index].open
				}
			})
		}
	})
})

const toggleAlert = (alertIndex: number, propsIndex: number) => {
	closeAlerts()
	
	alertsRef.value[alertIndex].components_props[propsIndex].open = !alertsRef.value[alertIndex].components_props[propsIndex].open
};

const closeAlerts = () => {
	alertsRef.value = alertsRef.value.map((alert) => {
		return {
			...alert,
			components_props: alert.components_props.map((props) => {
				return {
					...props,
					open: false
				}
			})
		}
	})
}
</script>
