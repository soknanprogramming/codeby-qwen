# Project Context: learn-react

## Project Overview

This is a **React + TypeScript + Vite** application built as a learning project for React development. It implements a simple **item management system** where users can add, view, update, and remove items with titles and descriptions.

### Key Technologies

- **React 19** – UI framework
- **TypeScript 5.9** – Type-safe development
- **Vite 7** – Build tool and dev server with HMR
- **Tailwind CSS 4** – Utility-first CSS framework
- **Zustand 5** – Lightweight state management
- **React Router DOM 7** – Client-side routing
- **React Icons 5** – Icon library
- **ESLint 9** – Linting with TypeScript and React rules

### Architecture

- **State Management:** Zustand store (`src/stores/useItems.ts`) manages a list of items with CRUD operations (add, remove, clear, update).
- **Routing:** React Router handles navigation between pages: Home, About, Add Item, and View Item.
- **Styling:** Tailwind CSS is used for all styling, imported via `@import 'tailwindcss'` in `index.css`.
- **Components:** Reusable UI components live in `src/components/`, pages in `src/pages/`, types in `src/types/`, and state stores in `src/stores/`.

### Data Model

```ts
type Item = {
  title: string;
  description: string;
}
```

## Directory Structure

```
src/
├── components/     # Reusable UI components (Navbar, SideBar, Items, etc.)
├── pages/          # Route-based page components (Home, About, AddItem, ViewItem)
├── stores/         # Zustand state stores (useItems)
├── types/          # TypeScript type definitions (Items)
├── assets/         # Static assets
├── App.tsx         # Main app component with routing
├── main.tsx        # Application entry point
└── index.css       # Global styles (Tailwind import)
```

## Building and Running

### Development

```bash
npm run dev
```

Starts the Vite development server with Hot Module Replacement (HMR).

### Build

```bash
npm run build
```

Compiles TypeScript and bundles the application for production using Vite.

### Lint

```bash
npm run lint
```

Runs ESLint across the codebase to check for code quality issues.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Development Conventions

- **TypeScript:** Strict typing is enforced via `tsconfig.app.json` and `tsconfig.node.json`.
- **ESLint:** Configured with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Type-aware lint rules can be enabled for stricter checking.
- **React Refresh:** Fast Refresh is enabled via `@vitejs/plugin-react` (Babel-based).
- **State Management:** Zustand is used for global state. Stores are defined as functions (`useXxx`) following the hook convention.
- **Routing:** Uses `react-router-dom` with a simple flat route structure in `App.tsx`.

## Key Files

| File | Description |
|------|-------------|
| `src/App.tsx` | Main app component defining routes |
| `src/stores/useItems.ts` | Zustand store for item CRUD operations |
| `src/types/Items.ts` | TypeScript `Item` type definition |
| `src/pages/AddItem.tsx` | Form page for adding new items |
| `src/components/Navbar.tsx` | Navigation bar component |
| `vite.config.ts` | Vite configuration with React and Tailwind plugins |
| `eslint.config.js` | ESLint flat config with TypeScript and React plugins |
