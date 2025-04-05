# 📦 ts-helpers-kit

A modern, lightweight, and type-safe utility library for TypeScript projects. Supercharge your development with battle-tested helper functions for date manipulation, localStorage, cookies, and more – ready to plug into React, Vue, Angular, or any Vanilla TypeScript app.

![npm](https://img.shields.io/npm/v/ts-helpers-kit)
![types](https://img.shields.io/npm/types/ts-helpers-kit)
![license](https://img.shields.io/npm/l/ts-helpers-kit)
![coverage](https://img.shields.io/badge/tested-yes-brightgreen)
![CI](https://img.shields.io/github/actions/workflow/status/emanuelpps/ts-helpers-kit/tests.yml)

---

## 🚀 Why ts-helpers-kit?

✅ **Lightweight & Fast** – No dependencies. Tree-shakable helpers.  
✅ **TypeScript First** – Written in strict TypeScript.  
✅ **Framework Agnostic** – Works in React, Vue, Angular, Svelte, or Vanilla TS.  
✅ **Battle-tested** – Fully unit tested with [Vitest](https://vitest.dev).  
✅ **Modular** – Import only what you need.

---

## 📦 Installation

```bash
npm install ts-helpers-kit
# or
yarn add ts-helpers-kit
# or
pnpm add ts-helpers-kit
```

---

## 🛠️ Usage Examples

### ✅ Vanilla TypeScript

```ts
import { setCookie, getCookie } from 'ts-helpers-kit';

setCookie('token', 'abc123', 7);
const token = getCookie('token');
```

---

### ✅ React

```tsx
import { getLocalStorage, setLocalStorage } from 'ts-helpers-kit';

useEffect(() => {
  const user = getLocalStorage('user');
  if (!user) {
    setLocalStorage('user', { name: 'Emanuel' });
  }
}, []);
```

---

### ✅ Angular

```ts
import { getCookie } from 'ts-helpers-kit';

@Component({ ... })
export class AppComponent {
  ngOnInit() {
    const token = getCookie('authToken');
    console.log(token);
  }
}
```

---

### ✅ Vue

```ts
<script setup lang="ts">
import { getLocalStorage } from 'ts-helpers-kit';

const user = getLocalStorage('user');
</script>
```

---

## 📚 Available Helpers

### 📅 `dates/`

- `getTodayFormatted()` → `'YYYY-MM-DD'`
- `formatDate(date: string | Date, format?: string)`
- `isWeekend(date: string | Date)`
- `addDays(date: string | Date, days: number)`
- `getWeekdayName(date: string | Date)`

### 🍪 `storage/`

#### Cookies
- `getCookie(key: string): string | null`
- `setCookie(key: string, value: string, days: number)`

#### Local Storage
- `getLocalStorage<T>(key: string): T | null`
- `setLocalStorage<T>(key: string, value: T): void`

> All functions are **fully typed** and **strict-mode compatible**.

---

## ✅ Type Safety

All functions are written in `strict` mode TypeScript. You get full type inference and safety across all operations, even with generics.

```ts
const user = getLocalStorage<{ name: string }>('user');
```

---

## 📂 Project Structure

```
ts-helpers-kit/
├── src/
│   ├── dates/
│   └── storage/
├── tests/
├── tsconfig.json
├── vitest.config.ts
└── ...
```

---

## 🧪 Tests

All helpers are tested using [Vitest](https://vitest.dev).

```bash
npm test
```

---

## 📢 Spread the Word

If this project saves you time, consider giving it a ⭐ on GitHub!  
Follow the author [@emanuelpps](https://github.com/emanuelpps) for more projects like this.

---

## 🧩 Coming Soon

- `url` helpers: `getQueryParam`, `buildURL`
- `string` utils: `slugify`, `capitalize`
- `validation`: `isEmail`, `isPhoneNumber`

---

## 📄 License

MIT © [Emanuel Pages](https://github.com/emanuelpps)