<template>
	<div data-testid="iui-alert__wrapper" :class="`alert__wrapper ${open ? 'alert__wrapper--opened' : 'alert__wrapper--closed'}`">
		<div data-testid="iui-alert" :class="`alert alert__${type}`">
			<Icon v-if="showIcon" :icon="iconByAlertType" color="white" class="h-6 w-6" />
			<div class="flex flex-col">
				<h3>{{ title }}</h3>
				<p>{{ message }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

import Icon from '@/shared/iui-icon/iui-icon.vue';
import { Alert } from './iui-alert.interfaces';

const props = withDefaults(defineProps<Alert>(), {
	type: 'default',
	showIcon: false,
	title: 'Alert: ',
	message: 'This is an alert message',
	open: false,
});

const emit = defineEmits(['close']);

const iconByAlertType = computed(() => {
	switch (props.type) {
		case 'success':
			return 'checkmarkCircle';
		case 'error':
			return 'alertHexagon';
		case 'warning':
			return 'alertTriangle';
		case 'info':
			return 'informationCircle';
		default:
			return 'informationCircle';
	}
});

watch(
	() => props.open,
	(value) => {
		if (value) setTimeout(() => emit('close'), 5000);
	},
);
</script>

<style lang="scss" scoped>
.alert__wrapper--opened {
	@apply bottom-0;
}

.alert__wrapper--closed {
	@apply -bottom-[100px];
}
.alert {
	@apply flex items-center gap-5 p-2.5;
	background-size: 400%;
	animation: backgroundMotion 0.8s infinite linear alternate-reverse;

	&__default {
		@apply bg-gradient-to-r from-slate-500/90 to-gray-400/80 text-white backdrop-blur;
	}

	&__success {
		@apply bg-gradient-to-r from-green-500/90 to-emerald-400/80 text-white backdrop-blur;
	}

	&__error {
		@apply bg-gradient-to-r from-red-500/90 to-rose-500/80 text-white backdrop-blur;
	}

	&__warning {
		@apply bg-gradient-to-r from-yellow-500/90 to-orange-300/80 text-white backdrop-blur;
	}

	&__info {
		@apply bg-gradient-to-r from-cyan-500/90 to-sky-400/80 text-white backdrop-blur;
	}
}

@keyframes backgroundMotion {
	0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 100% 100%;
	}
}
</style>
