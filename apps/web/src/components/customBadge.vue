<script setup lang="ts">
    import { SquareGenerator } from '@/utils/badge';

    interface BadgeProps {
        leftText: string;
        leftColor?: string;
        rightText?: string;
        rightColor?: string;
    }

    const props = withDefaults(defineProps<BadgeProps>(), {});

    function getSvg() {
        return SquareGenerator.create({
            leftText: props.leftText,
            leftColor: props.leftColor,
            rightText: props.rightText,
            rightColor: props.rightColor,
        });
    }
</script>

<template>
    <div v-html="getSvg()"></div>
</template>
