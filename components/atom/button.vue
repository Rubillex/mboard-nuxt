<template>
    <button :class="`button ${theme}`">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { IButtonProps } from '~/types/components';

withDefaults(defineProps<IButtonProps>(), {
    theme: 'green',
});
</script>

<style lang="scss" scoped>
.button {
    @include mainFont(500, 14, $color-white);
    width: 100%;
    border-radius: 12px;
    text-decoration: none;
    padding: 12px 15px;
    border: 1px solid $color-white;
    cursor: pointer;

    @include transition(all 0.3s ease);

    &.about {
        @include mainFont(500, 12, $accent-color, 14);
        background-color: $color-white;
        border: 1px solid $accent-color;
        border-radius: 4px;
        padding: 8px 20px;

        &:hover {
            @include transition(all 0.3s ease);
            background-color: $accent-color;
            color: $color-white;
            border: 1px solid $accent-color;
        }

        &:focus {
            @include transition(all 0.3s ease);
            color: $accent-color;
        }

        &:focus:hover {
            @include transition(all 0.3s ease);
            color: $color-white;
        }
    }

    &.green {
        background-color: $color-green;
        color: $color-white;
        border: 1px solid $color-green;

        &:hover {
            @include transition(all 0.3s ease);
            background-color: $color-white;
            color: $color-green;
            border: 1px solid $color-green;
        }

        &:focus {
            @include transition(all 0.3s ease);
            color: $color-white;
        }

        &:focus:hover {
            @include transition(all 0.3s ease);
            color: $color-green;
        }
    }
}
</style>
