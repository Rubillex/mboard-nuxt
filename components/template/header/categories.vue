<template>
    <div class="container slider">
        <div ref="categoriesEl" class="categories">
            <NuxtLink
                v-for="category in categories.result.data"
                :key="category.id"
                to="/"
                class="categories__item untouchable hover-underline-white"
            >
                {{ category.name }}
            </NuxtLink>
        </div>
        <div class="categories__gradient" :class="{ active: activeGradients.left }"></div>
        <div class="categories__gradient categories__gradient--right" :class="{ active: activeGradients.right }"></div>
    </div>
</template>

<script lang="ts" setup>
import type { IResponse } from '~/types/api/types';

interface ICategory {
    id: number;
    name: string;
    slug: string;
}

interface ICategoriesResponse {
    data: ICategory[];
}

const config = useRuntimeConfig();

const categoriesEl = ref<HTMLElement>();
const maxScroll = ref<number>(0);

const activeGradients = ref<{ left: boolean; right: boolean }>({
    left: false,
    right: true,
});

const { data: categories } = await useFetch<IResponse<ICategoriesResponse>>(`${config.public.api}/categories`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'X-AppApiToken': `${config.public.apiKey}`,
    },
});

const scrollListener = () => {
    activeGradients.value.left = (categoriesEl.value?.scrollLeft ?? 0) > 0;
    activeGradients.value.right =
        (categoriesEl.value?.scrollLeft ?? 0) + (categoriesEl.value?.clientWidth ?? 0) < (categoriesEl.value?.scrollWidth ?? 0);
};

onMounted(() => {
    maxScroll.value = (categoriesEl.value?.scrollWidth ?? 0) - (categoriesEl.value?.offsetWidth ?? 0);
    categoriesEl.value?.addEventListener('scroll', scrollListener);
});

onUnmounted(() => {
    categoriesEl.value?.removeEventListener('scroll', scrollListener);
});
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
}

.categories {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 21px;
    overflow-x: auto;
    padding: 16px 0;
    scrollbar-width: none;

    &__item {
        @include mainFont(400, 14, $color-white);
        white-space: nowrap;
        float: left;
    }

    &__gradient {
        pointer-events: none;
        height: 100%;
        width: 35px;
        position: absolute;
        top: 0;
        left: -1px;
        transform: rotate(180deg);
        background: linear-gradient(90deg, rgba(18, 18, 19, 0) 20%, $accent-color 98%);

        opacity: 0;
        visibility: hidden;
        @include transition(opacity 0.5s ease, visibility 0.5s ease);

        &.active {
            @include transition(opacity 0.5s ease, visibility 0.5s ease);
            opacity: 1;
            visibility: visible;
        }

        &--right {
            left: unset;
            right: -1px;
            transform: rotate(0);
        }
    }
}
</style>
