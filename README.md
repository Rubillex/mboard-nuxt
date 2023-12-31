# Внимание: дополнения, доработки от других разработчиков категорически приветствуются! Они будут рассмотрены и добавлены, если они соответствуют нуждам темплейта и будут полезны в будущих проектах.

# Nuxt 3

- [Официальная документация Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Документация по деплою](https://nuxt.com/docs/getting-started/deployment)
- [Основная структура папок проекта с описанием того, что должно в них находиться](https://nuxt.com/docs/guide/directory-structure/nuxt)

## Перед началом работы

Установка зависимостей:

```bash
npm install
```

Или:

```
npm install --force
```

## Дев сервер

Запуск дев сервера на `http://localhost:3000`:

```bash
npm run dev
```

## Продакшн

Сборка для прода:

```bash
npm run build
```

Локальный предпросмотр сборки:

```bash
npm run preview
```

# Список основных библиотек проекта

## Pinia

Современный стейт-менеджер, активно используемый во Vue 3. Пригодится для создания глобальных хранилищ.

[Официальный сайт с документацией](https://pinia.vuejs.org)

## Vee Validate

Библиотека, предназначенная для работы с формами: чтение данных, введенных в элементы форм, валидация, подстановка ошибок и т. д.

Базовые кастомные глобальные валидаторы описаны в **globals/validation/validators.ts**.

[Официальный сайт с документацией](https://vee-validate.logaretm.com/v4/)

## Vue Toastification

Библиотека, упрощающая добавление тостов (алертов). Обладает достаточной гибкостью в настройке тостов и их стилизации.

Подключение плагина находится в **plugins/toast.ts**.

Создание composable для работы с тостами находится в **composables/useToastification.ts**.

[Официальный сайт с примерами и ссылкой на github с документацией](https://vue-toastification.maronato.dev)

## Frog-modal

Личная библиотека, предоставляющая хелпер для работы с модальными окнами.

[Документация на npm](https://www.npmjs.com/package/frog-modal)

# Полезные личные наработки

## Модуль для работы с API

Модуль, упрощающий работу с API бэкенда. По дефолту внутри имеется поддержка авторизации через Bearer токен.

**Код находится в composables/useApi.ts**.

## Директива v-click-outside

Кастомная vue-директива, предназначенная для отслеживания кликов вне элемента, на который навешена директива.

**Код находится в plugins/click-outside.ts**.

Использование:

```vue
<div v-click-outside="handleClose"></div>
```

## Директива v-tilt

Кастомная vue-директива, которая добавляет анимацию изменения наклона элемента при перемещении по нему курсора мыши.

**Код находится в plugins/tilt.ts**.

Параметры, которые можно в нее передать:

```ts
type Options = {
    perspective: number; // Значение перспективы карточки
    scale: number; // Значение увеличения карточки при наведении
    transition: string; // Свойство transition, которое нужно навесить на карточку. Transition настоятельно рекомендуется указывать именно через этот параметр, а не через стили.
    delay: number; // Скорость анимации в мс.
}
```

Использование:

```vue
<div v-tilt="{ delay: 1000 }"></div>
```
