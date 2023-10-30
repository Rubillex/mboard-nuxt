<template>
    <header>
        <div class="header-gradient"></div>
        <div class="header__top-wrapper">
            <div class="container header-top">
                <div class="header-top__left">
                    <NuxtLink to="/" class="header-top__text hover-underline-white">Главная</NuxtLink>
                    <NuxtLink to="/" class="header-top__text hover-underline-white">Объявления</NuxtLink>
                    <NuxtLink to="/" class="header-top__text hover-underline-white">Категории</NuxtLink>
                    <NuxtLink to="/" class="header-top__text hover-underline-white">Блог</NuxtLink>
                    <NuxtLink to="/" class="header-top__text hover-underline-white">Помощь</NuxtLink>
                </div>
                <div class="header-top__right">
                    <NuxtLink v-if="!usersStore.isAuthorize" to="/" class="header-top__text hover-underline-white">
                        <span class="header__link"> <IconUser /> Зарегистрироваться </span>
                    </NuxtLink>
                    <NuxtLink v-if="!usersStore.isAuthorize" to="/" class="header-top__text hover-underline-white">
                        <span class="header__link"> <IconLogin /> Вход </span>
                    </NuxtLink>
                    <AtomButton theme="green">
                        <span class="header__button">
                            <IconPlus />
                            Разместить объявление
                        </span>
                    </AtomButton>
                </div>
            </div>
        </div>
        <div class="header__categories">
            <TemplateHeaderCategories />
        </div>
    </header>
</template>

<script lang="ts" setup>
import { userStore } from '~/stores/user';

const usersStore = userStore();
</script>

<style lang="scss" scoped>
.header-gradient {
    position: absolute;
    top: 60px;
    left: 0;
    background: linear-gradient(180deg, $accent-color 60px, $color-white 100%);
    height: 260px;
    width: 100vw;
}

.header {
    &__top-wrapper {
        background-color: $accent-color;
    }

    &__button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    &__link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3px;
    }
}

.header-top {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;

    &__left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }

    &__right {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }

    &__text {
        @include mainFont(600, 13, $color-white);
        padding: 20px 0;
    }
}
</style>
