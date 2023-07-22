<script setup lang="ts"></script>

<template>
  <div class="main">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
