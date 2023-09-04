<template>
    <div class="flex flex-col gap-5 border-b pb-5 border-b-slate-200/10">
        <h2 class="text-7xl">{{ title }}</h2>
        <h3 class="text-xl text-gray-200">
            {{  description }}
        </h3>
    </div>
</template>

<script setup lang="ts">

interface Props {
    title: string;
    description: string;
}

defineProps<Props>();
</script>

<style scoped>

</style>