<template>
	<section class="flex flex-col gap-5">
		<h2 class="text-3xl font-bold">Components summary</h2>
		<hr class="opacity-10" />
		<!-- BUTTONS -->
		<strong class="text-primary text-xl">Buttons</strong>
		<article class="flex flex-wrap justify-stretch items-center gap-10">
			<Button v-for="(props, i) of BUTTONS_SUMMARY" :key="i" v-bind="props">
				{{ props.text }}
			</Button>
		</article>

		<!-- ICONS -->
		<strong class="text-primary text-xl">Icons</strong>
		<article class="flex flex-wrap items-center gap-10">
			<div
				v-for="(props, j) of ICONS_SUMMARY"
				:key="j"
				class="flex flex-col gap-2.5 justify-center items-center border border-white/10 p-2 min-w-[100px]">
				<Icon v-bind="props" class="w-10 h-10" />
				<span>{{ props.icon }}</span>
			</div>
		</article>

		<!-- BADGES -->
		<strong class="text-primary text-xl">Badges</strong>
		<article class="flex flex-wrap items-center gap-10">
			<Badge v-for="(props, x) of BADGES_SUMMARY" :key="x" v-bind="props">
				<Icon v-bind="props" class="w-10 h-10" />
			</Badge>
		</article>
	</section>
</template>

<script setup lang="ts">
import Button from '@/shared/iui-button/iui-button.vue';
import Badge from '@/shared/iui-badge/iui-badge.vue';
import Icon from '@/shared/iui-icon/iui-icon.vue';

import { BUTTONS_SUMMARY, ICONS_SUMMARY, BADGES_SUMMARY } from '@/constants';
</script>
