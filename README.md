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
| Button         | ![ReadyBtn] |
| Icon           | ![ReadyBtn] |
| Badge          | ![ReadyBtn] |
| Avatar         | ![ReadyBtn] |
| Progress       | ![WipBtn]   |
| Spinner        | ![WipBtn]   |
| Chip           | ![WipBtn]   |
| Card           | ![WipBtn]   |
| List           | ![WipBtn]   |
| Table          | ![WipBtn]   |
| Modal          | ![WipBtn]   |
| Dialog         | ![WipBtn]   |
| Tooltip        | ![WipBtn]   |
| Divider        | ![WipBtn]   |
| Calendar       | ![WipBtn]   |
| Carousel       | ![WipBtn]   |
| Collapse       | ![WipBtn]   |
| Upload         | ![WipBtn]   |
| Alert          | ![WipBtn]   |
| Loading        | ![WipBtn]   |
| Skeleton       | ![WipBtn]   |
| Tag            | ![WipBtn]   |

| Component (Navigation) | Status    |
| ---------------------- | --------- |
| Navbar                 | ![WipBtn] |
| Sidebar                | ![WipBtn] |
| Menu                   | ![WipBtn] |
| Breadcrumb             | ![WipBtn] |
| Pagination             | ![WipBtn] |
| Tabs                   | ![WipBtn] |
| Steps                  | ![WipBtn] |
| Timeline               | ![WipBtn] |

| Component (Form) | Status    |
| ---------------- | --------- |
| Input            | ![WipBtn] |
| Select           | ![WipBtn] |
| Textarea         | ![WipBtn] |
| Checkbox         | ![WipBtn] |
| Radio            | ![WipBtn] |
| Switch           | ![WipBtn] |
| Slider           | ![WipBtn] |
| Dropdown         | ![WipBtn] |
| Datepicker       | ![WipBtn] |
| Timepicker       | ![WipBtn] |
| Form             | ![WipBtn] |

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
