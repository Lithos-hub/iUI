<template>
    <div class="flex items-center gap-5 rounded-full w-full overflow-hidden">
        <div
        :class="`progress w-full ${displayValue ? 'h-2' : 'h-1'} ${indeterminate && 'progress__indeterminate'}`"
        :style="!indeterminate ? computedDefault : {}" />
        <div v-if="displayValue && !indeterminate" class="progress__value flex flex-col justify-center items-center h-4">
            <small class="text-xs text-white bg-[#202020] min-w-[50px] text-center">{{ value }}%</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getTailwindColor } from '@/utils';
import { Progress } from './iui-progress.interfaces';

const { indeterminate, value, color } = withDefaults(defineProps<Progress>(), {
    indeterminate: false,
    value: 10,
    color: 'white',
})

const computedDefault = computed(() => {
    return { 
        background: `linear-gradient(to right, ${computedColor.value} ${value}%, transparent 0%)`
    }
})
const computedColor = computed(() => getTailwindColor(color))

</script>

<style lang="scss" scoped>

.progress {

    &__default {
        background: linear-gradient(to right, v-bind(color) v-bind(value), transparent 0%);
    }

    &__indeterminate {
        background-size: 100% 100%;
        background-image: linear-gradient(to right, transparent 40%, v-bind(color) 60%, v-bind(color) 10%, transparent 50%, transparent 71.5%, v-bind(color) 20.5%, v-bind(color) 24%, transparent 100%);
        animation: indeterminate 2s infinite linear;
    }

    &__value {
        clip-path: polygon(20% 0%, 90% 0, 90% 100%, 0% 100%);
    }
}

@keyframes indeterminate {
    0% {
        background-size: 200% 100%;
        background-position: left -31.25% top 0%;
    }
    50% {
        background-size: 800% 100%;
        background-position: left -49% top 0%;
    }
    100% {
        background-size: 400% 100%;
        background-position: left -120% top 0%;
    }
}
</style>