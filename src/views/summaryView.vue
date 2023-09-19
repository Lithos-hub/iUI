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

		<!-- AVATARS -->
		<strong class="text-primary text-xl">Avatars</strong>
		<article class="flex flex-wrap items-center gap-10">
			<Avatar v-for="(props, y) of AVATARS_SUMMARY" :key="y" v-bind="props" class="w-10 h-10" />
		</article>

		<!-- DIVIDERS -->
		<strong class="text-primary text-xl">Dividers</strong>
		<article class="flex flex-col">
			<Divider v-for="(props, z) of DIVIDER_SUMMARY" :key="z" v-bind="props" />
		</article>

		<!-- TAGS -->
		<strong class="text-primary text-xl">Tags</strong>
		<article class="flex flex-wrap justify-stretch items-center gap-10">
			<Tag v-for="(props, i) of TAGS_SUMMARY" :key="i" v-bind="props" />
		</article>
	</section>
</template>

<script setup lang="ts">
import Button from '@/shared/iui-button/iui-button.vue';
import Badge from '@/shared/iui-badge/iui-badge.vue';
import Icon from '@/shared/iui-icon/iui-icon.vue';
import Avatar from '@/shared/iui-avatar/iui-avatar.vue';
import Divider from '@/shared/iui-divider/iui-divider.vue';
import Tag from '@/shared/iui-tag/iui-tag.vue';

import {
	BUTTONS_SUMMARY,
	ICONS_SUMMARY,
	BADGES_SUMMARY,
	AVATARS_SUMMARY,
	DIVIDER_SUMMARY,
	TAGS_SUMMARY
} from '@/constants';
</script>
