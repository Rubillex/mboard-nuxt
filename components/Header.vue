<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__top-wrapper">
      <div class="header__top container">
        <div class="header__links">
          <NuxtLink to="">Главная</NuxtLink>
          <NuxtLink to="">Объявления</NuxtLink>
          <NuxtLink to="">Категории</NuxtLink>
          <NuxtLink to="">Блог</NuxtLink>
          <NuxtLink to="">Помощь</NuxtLink>
        </div>
        <div class="header__actions">
          <div class="header__action">
            <IconUser />
            Зарегистрироваться
          </div>
          <div class="header__action">
            <IconSignIn />
            Вход
          </div>
          <UiButton>
            <IconPlus />
            Разместить объявление
          </UiButton>
        </div>
      </div>
    </div>
    <div class="header-gradient"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__top-wrapper {
    background-color: var(--accent);
  }

  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    a {
      color: var(--text-light);
      font-weight: 600;
      font-size: 13px;
      display: flex;
      padding: 20px 0;
    }
  }

  &__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  &__action {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;

    font-weight: 600;
    font-size: 13px;
    line-height: 14px;
    color: var(--text-light);
    align-self: end;
    padding: 18px 0;

    svg {
      color: var(--text-light);
    }
  }
}

.header-gradient {
  position: absolute;
  top: 60px;
  left: 0;

  background: linear-gradient(180deg, var(--accent) 60px, var(--bg) 100%);
  height: 260px;
  width: 100vw;
}
</style>
