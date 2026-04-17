# Project Overview: Codeby Qwen Portfolio

This is a modern, responsive personal portfolio website built with React 19 and TypeScript. It showcases projects, professional skills, and work experiences with a sleek, dark-themed UI and smooth animations.

## Main Technologies
- **Framework:** React 19 (using Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite` and standard CSS imports)
- **Routing:** React Router Dom v7
- **State Management:** Zustand
- **Icons:** React Icons

## Architecture
The project follows a standard React application structure:
- `src/components`: Reusable UI components (Navbar, Footer, Hero, etc.).
- `src/pages`: Main view components for different routes (Home, About, Projects, Contact).
- `src/stores`: Zustand stores for global state management (`usePortfolio`, `useItems`).
- `src/types`: TypeScript interfaces and types for portfolio data and items.
- `src/assets`: Static assets like images and SVG files.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```powershell
npm run dev
```

### Production Build
To build the project for production:
```powershell
npm run build
```
This command runs TypeScript type-checking (`tsc -b`) and then builds the application using Vite.

### Linting
To run ESLint and check for code quality issues:
```powershell
npm run lint
```

### Preview Build
To preview the production build locally:
```powershell
npm run preview
```

## Development Conventions

### Styling
- **Tailwind CSS v4:** Styles are defined in `src/index.css` using the `@import "tailwindcss";` syntax. Custom theme extensions, animations (like `animate-blob`), and base styles are managed via CSS layers (`@layer base`, `@layer utilities`).
- **Dark Theme:** The UI is designed with a dark aesthetic (slate/blue palette) with custom scrollbars and interactive elements.

### State Management
- **Zustand:** Use Zustand for global state. Stores are located in `src/stores/`.
- **Portfolio Data:** `usePortfolio.ts` serves as the primary data source for projects, skills, and work history.

### Data Types
- **Portfolio Types:** Definitions for `Project`, `Skill`, `Experience`, and `SocialLink` are located in `src/types/Portfolio.ts`.
- **Type Safety:** Always adhere to these schemas when adding new content to the stores.

### Components
- **Functional Components:** Use functional components with TypeScript interfaces for props.
- **Icons:** Use `react-icons` (specifically Font Awesome and other libraries) for consistent iconography.

### Routing
- **React Router:** Defined in `src/App.tsx`. New pages should be added to the `<Routes>` component and linked in the `Navbar`.
