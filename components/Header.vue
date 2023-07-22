<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="header__links"></div>
      <div class="header__actions"></div>
    </div>
    <div class="header-gradient"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
}

.header-gradient {
  position: absolute;
  top: 60px;
  left: 0;

  background: linear-gradient(180deg, var(--accent) 60px, var(--bg) 100%);
  height: 260px;
  width: 100vw;

  @media (max-width: $max-tablet-size) {
    top: 90px;
    height: 200px;
  }

  @media (max-width: $max-mobile-size) {
    background: linear-gradient(180deg, var(--accent) 0, var(--bg) 100%);
    top: 52px;
    height: 231px;
    z-index: 1;
  }
}
</style>
