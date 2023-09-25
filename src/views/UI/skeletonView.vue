<template>
	<div>
		<Skeleton>
			<template #title>Title</template>
			<template #description>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi saepe harum
					esse quis! Sapiente ad dolore rerum a nam!
				</p>
			</template>
			<template #content>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, iusto. Labore nihil
					optio cum consequuntur iusto, molestias deleniti magnam exercitationem nam, quae saepe
					similique tenetur rem sequi neque quibusdam amet adipisci! Harum nostrum nisi, mollitia
					maiores similique laudantium ipsum nesciunt inventore quo officia, amet quod, animi odio
					minus dicta quidem.
				</p>
			</template>
		</Skeleton>
	</div>
</template>

<script script setup lang="ts">
import Skeleton from '@/shared/iui-skeleton/iui-skeleton.vue';
</script>

<style scoped></style>
