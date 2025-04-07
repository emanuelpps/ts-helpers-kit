# ts-helpers-kit

![ts-helpers-kit Logo](https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/oflmqaopyk2qibrwvhay)

[![npm](https://img.shields.io/npm/v/ts-helpers-kit)](https://www.npmjs.com/package/ts-helpers-kit)
[![Types](https://img.shields.io/npm/types/ts-helpers-kit)](https://www.npmjs.com/package/ts-helpers-kit)
[![License](https://img.shields.io/npm/l/ts-helpers-kit)](LICENSE)
[![Coverage Status](https://img.shields.io/coveralls/github/emanuelpps/ts-helpers-kit)](https://coveralls.io/github/emanuelpps/ts-helpers-kit)
[![CI](https://github.com/emanuelpps/ts-helpers-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/emanuelpps/ts-helpers-kit/actions)

**ts-helpers-kit** is a modern, lightweight, and type-safe utility library for TypeScript projects. It provides handy helper functions for date manipulation, localStorage, cookies, and more. It is compatible with all frontend frameworks or plain TypeScript environments.

## Features

- **Lightweight & Fast**: No external dependencies and supports tree-shaking.
- **TypeScript First**: Fully written in TypeScript with strict type safety.
- **Framework Agnostic**: Works with React, Vue, Angular, Svelte, or plain TS.
- **Tested**: Fully covered with [Vitest](https://vitest.dev/).
- **Modular**: Import only what you need.

## Installation

```bash
npm install ts-helpers-kit
```

or with Yarn:

```bash
yarn add ts-helpers-kit
```

## Usage

### Date Manipulation

```ts
import { formatDate, addDays } from 'ts-helpers-kit';

const formatted = formatDate(new Date(), 'YYYY-MM-DD');
console.log(formatted); // '2025-04-07'

const newDate = addDays(new Date(), 3);
console.log(newDate); // 3 days later
```

### localStorage Helpers

```ts
import { setLocalStorage, getLocalStorage, removeLocalStorage } from 'ts-helpers-kit';

setLocalStorage('token', 'abc123');
console.log(getLocalStorage('token')); // 'abc123'
removeLocalStorage('token');
```

### Cookie Helpers

```ts
import { setCookie, getCookie, deleteCookie } from 'ts-helpers-kit';

setCookie('user', 'Jane Doe', 7);
console.log(getCookie('user')); // 'Jane Doe'
deleteCookie('user');
```

## Framework Examples

### React

```tsx
const App = () => {
  const [theme, setTheme] = useState(() => getLocalStorage('theme') || 'light');

  useEffect(() => {
    setLocalStorage('theme', theme);
  }, [theme]);

  return (
    <div className={theme}>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
};
```

### Vue

```vue
<script setup>
import { ref, watch } from 'vue';
import { getLocalStorage, setLocalStorage } from 'ts-helpers-kit';

const theme = ref(getLocalStorage('theme') || 'light');
watch(theme, (newValue) => setLocalStorage('theme', newValue));
</script>

<template>
  <div :class="theme">
    <button @click="theme = 'light'">Light</button>
    <button @click="theme = 'dark'">Dark</button>
  </div>
</template>
```

### Angular

```ts
@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="theme">
      <button (click)="setTheme('light')">Light</button>
      <button (click)="setTheme('dark')">Dark</button>
    </div>
  `,
})
export class AppComponent implements OnInit {
  theme = 'light';
  ngOnInit() {
    this.theme = getLocalStorage('theme') || 'light';
  }
  setTheme(theme: string) {
    this.theme = theme;
    setLocalStorage('theme', theme);
  }
}
```

### Node.js

```ts
import { formatDate } from 'ts-helpers-kit';

console.log(formatDate(new Date(), 'YYYY-MM-DD'));
```

## Function Reference

### `formatDate(date: Date, format: string): string`

Formats a date based on a format string.

### `addDays(date: Date, days: number): Date`

Returns a new date N days ahead.

### `setLocalStorage(key: string, value: string): void`

Saves a value to localStorage.

### `getLocalStorage(key: string): string | null`

Gets a value from localStorage.

### `removeLocalStorage(key: string): void`

Removes a value from localStorage.

### `setCookie(name: string, value: string, days: number): void`

Sets a cookie with an expiry in days.

### `getCookie(name: string): string | null`

Retrieves a cookie by name.

### `deleteCookie(name: string): void`

Deletes a cookie by name.

---

> MIT License • Made with ❤️ by [@emanuelpps](https://github.com/emanuelpps)