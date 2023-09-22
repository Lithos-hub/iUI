<template>
	<div :class="`alert__wrapper ${open ? 'alert__wrapper--opened' : 'alert__wrapper--closed'}`">
		<div :class="`alert alert__${type}`">
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
	open: false
});

const emit = defineEmits(['close']);

const iconByAlertType = computed(() => {
	switch (props.type) {
		case 'success':
			return 'checkmarkCircle';
		case 'danger':
			return 'alertCircle';
		case 'warning':
			return 'alertCircle';
		case 'info':
			return 'informationCircle';
		default:
			return 'informationCircle';
	}
});

watch(() => props.open, (value) => {
	if (value) {
		setTimeout(() => {
			emit('close');
		}, 5000);
	}
});
</script>

<style lang="scss" scoped>

.alert__wrapper--opened {
	@apply bottom-0;
}

.alert__wrapper--closed {
	@apply -bottom-[100px];
}
.alert__wrapper {
	@apply fixed left-0 w-full transition-all;
}
.alert {
    @apply flex items-center gap-5 p-2.5;

	&__default {
		@apply bg-slate-500/80 text-white backdrop-blur;
	}

	&__success {
		@apply bg-green-500/80 text-white backdrop-blur;
	}

	&__error {
		@apply bg-red-500/80 text-white backdrop-blur;
	}

	&__warning {
		@apply bg-yellow-500/80 text-white backdrop-blur;
	}

	&__info {
		@apply bg-cyan-500/80 text-white backdrop-blur;
	}
}
</style>
