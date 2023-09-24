# iUI

iUI is a components portfolio made with Vue 3, TypeScript, Tailwind CSS, SASS, Vitest and Vite.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
npm run start
```

### Run your unit tests

```
npm run test:unit
```

## Components list

| Component (UI) | Status      |
| -------------- | ----------- |
| Alert          | ![ReadyBtn] |
| Avatar         | ![ReadyBtn] |
| Badge          | ![ReadyBtn] |
| Button         | ![ReadyBtn] |
| Calendar       | ![WipBtn]   |
| Card           | ![WipBtn]   |
| Carousel       | ![WipBtn]   |
| Chip           | ![WipBtn]   |
| Collapse       | ![WipBtn]   |
| Dialog         | ![WipBtn]   |
| Divider        | ![ReadyBtn] |
| Icon           | ![ReadyBtn] |
| List           | ![WipBtn]   |
| Spinner        | ![ReadyBtn] |
| Modal          | ![WipBtn]   |
| Progress       | ![ReadyBtn] |
| Skeleton       | ![WipBtn]   |
| Table          | ![WipBtn]   |
| Tag            | ![ReadyBtn] |
| Tooltip        | ![WipBtn]   |

| Component (Navigation) | Status    |
| ---------------------- | --------- |
| Breadcrumb             | ![WipBtn] |
| Menu                   | ![WipBtn] |
| Navbar                 | ![WipBtn] |
| Pagination             | ![WipBtn] |
| Sidebar                | ![WipBtn] |
| Steps                  | ![WipBtn] |
| Tabs                   | ![WipBtn] |
| Timeline               | ![WipBtn] |

| Component (Form) | Status    |
| ---------------- | --------- |
| Checkbox         | ![WipBtn] |
| Datepicker       | ![WipBtn] |
| Dropdown         | ![WipBtn] |
| Form             | ![WipBtn] |
| Input            | ![WipBtn] |
| Radio            | ![WipBtn] |
| Select           | ![WipBtn] |
| Slider           | ![WipBtn] |
| Switch           | ![WipBtn] |
| Textarea         | ![WipBtn] |
| Timepicker       | ![WipBtn] |
| Upload           | ![WipBtn] |

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

[ReadyBtn]: https://img.shields.io/badge/Ready!-37a779?style=for-the-badge
[WipBtn]: https://img.shields.io/badge/WIP-105090?style=for-the-badge
