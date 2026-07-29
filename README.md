# Focus List

A compact React task manager designed as a clean personal workspace rather than a generic tutorial demo.

## Features

- Create, complete, search, inspect, and delete tasks
- Persistent browser storage with an asynchronous API adapter
- Derived completion statistics
- Smooth navigation to the first unfinished task
- Animated list updates and responsive layout
- Custom lightweight routing with GitHub Pages support

## Architecture

The project follows a feature-oriented structure:

- `app` — application setup and routing
- `pages` — route-level screens
- `widgets` — composed interface blocks
- `features` — user actions
- `entities` — task model and UI
- `shared` — reusable API, hooks, and controls

## Stack

React 19, JavaScript, Vite, CSS Modules, Sass, localStorage.

## Run locally

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

This is a learning/pet project focused on React composition, state flows, browser persistence, and maintainable frontend structure.
