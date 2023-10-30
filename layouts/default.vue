<template>
    <div class="layout">
        <TemplateHeader />
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
}
</style>
