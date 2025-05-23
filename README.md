# TS-Helpers-kit

<p align="center">
  <img 
    src="https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/hiofmygmttwrrqxzrxdc" 
    alt="ts-helpers-kit Logo" 
    width="200"
    style="border-radius: 10px;"
  />
</p>


[![npm](https://img.shields.io/npm/v/ts-helpers-kit)](https://www.npmjs.com/package/ts-helpers-kit)
[![Types](https://img.shields.io/npm/types/ts-helpers-kit)](https://www.npmjs.com/package/ts-helpers-kit)


**ts-helpers-kit** is a modern, lightweight, and type-safe utility library for TypeScript projects. It provides handy helper functions for date manipulation, localStorage, cookies, and more. It is compatible with all frontend frameworks or plain TypeScript environments.

## Features

- **Lightweight & Fast**: No external dependencies and supports tree-shaking.
- **TypeScript First**: Fully written in TypeScript with strict type safety.
- **Framework Agnostic**: Works with React, Vue, Angular, Svelte, or plain TS.
- **Tested**: Fully covered with [Vitest](https://vitest.dev/).
- **Modular**: Import only what you need.

---

## 📦 Repository

Find the full source code on GitHub:

🔗 **[github.com/emanuelpps/ts-helpers-kit](https://github.com/emanuelpps/ts-helpers-kit)**


## 💬 Why Use ts-helpers-kit?

- You save hours of repetitive code.
- You keep your TypeScript codebase clean, safe, and readable.
- You avoid installing big libraries just for a few helpers.
- You can use it in any environment (browser, SSR, Node).

---

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

# 📚 Utility Functions Reference

## 🔤 String Manipulation
Functions to work with text strings, useful in any application.

### `slugify(text: string): string`
Converts a string into a SEO-friendly slug.  
Example: `'Hello World!' → 'hello-world'`

### `capitalize(text: string): string`
Converts the first letter to uppercase.  
Example: `'hello' → 'Hello'`

### `truncate(text: string, length: number): string`
Truncates a string and adds ellipsis if it's too long.  
Example: `'This is a long string' → 'This is a…'`

### `randomString(length: number): string`
Generates a random alphanumeric string.  
Example: `'randomString(8)' → 'aZ8h1jP3'`

---

## 🔢 Numbers and Currency
Helps with calculations and number formatting.

### `formatCurrency(amount: number, locale: string, currency: string): string`
Formats a number as currency.  
Example: `formatCurrency(2500, 'en-US', 'USD') → '$2,500.00'`

### `clamp(value: number, min: number, max: number): number`
Restricts a number within a range.  
Example: `clamp(120, 0, 100) → 100`

### `randomInt(min: number, max: number): number`
Generates a random number between two values.  
Example: `randomInt(1, 10) → 7`

---

## 🕒 Dates and Time
Common functions for formatting and handling dates.

### `formatDate(date: Date, format: string): string`
Formats a date into a custom format.  
Example: `formatDate(new Date(), 'YYYY-MM-DD') → '2025-04-07'`

### `timeAgo(date: Date): string`
Returns a human-readable relative time.  
Example: `'1 minute ago', '3 days ago'`

### `addDays(date: Date, days: number): Date`
Adds a number of days to a date.  
Example: `addDays(new Date(), 5) → [Date +5 days]`

### `isWeekend(date: Date): boolean`
Checks if the given date falls on a weekend.  
Example: `isWeekend(new Date('2025-04-06')) → true`

---

## 💾 Storage and Cookies
Functions for managing `localStorage`, `sessionStorage`, and cookies.

### `setLocalStorage(key: string, value: any): void`
Stores a value in `localStorage`.

### `getLocalStorage<T>(key: string): T | null`
Retrieves a value from `localStorage`.

### `setCookie(name: string, value: string, days: number): void`
Sets a cookie with expiration in days.

### `getCookie(name: string): string | null`
Gets a cookie by name.

---

## 🧠 Data Structures and Algorithms
Utilities to manipulate arrays and objects.

### `deepClone<T>(obj: T): T`
Clones an object without references.

### `deepMerge<T>(target: T, source: T): T`
Deeply merges two objects without overwriting nested properties.

### `groupBy<T>(array: T[], key: keyof T): Record<string, T[]>`
Groups array elements by a key.

---

## ⚙️ General Utility Functions
Practical helpers to improve code quality.

### `debounce(func: Function, delay: number): Function`
Controls repeated execution of a function by delaying it.

### `throttle(func: Function, limit: number): Function`
Limits function execution within a specified time window.

### `isEmpty(value: any): boolean`
Checks if an object, array, or string is empty.

### `uuid(): string`
Generates a unique UUID.


---

## 🔑 Keywords

`typescript` `helpers` `utilities` `toolkit` `ts` `localStorage` `cookies` `dates` `strings` `frontend` `typescript library` `utility functions` `javascript` `react` `vue` `angular` `nodejs` `npm` `webdev`

---


> MIT License • Made by [@emanuelpps](https://github.com/emanuelpps)