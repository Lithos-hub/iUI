# iUI

![iUI](https://private-user-images.githubusercontent.com/57297760/290511041-d17b7409-88e4-4e62-8b08-e0f2c00fb0a7.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI1NTU2NjIsIm5iZiI6MTcwMjU1NTM2MiwicGF0aCI6Ii81NzI5Nzc2MC8yOTA1MTEwNDEtZDE3Yjc0MDktODhlNC00ZTYyLThiMDgtZTBmMmMwMGZiMGE3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE0VDEyMDI0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVkNzk2MDRmNDJlMDUzMzQ5YWZjM2NhZDY0YzU2YjIwYjkyZDE1NjJiZDVjZjdjOTgzZDkyMzFiMGVjODI1YzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Lop9UVdf7vZCN-Qte13V1MdVMjn1Q5VkELBTljwHJN8)

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

## Components list - Roadmap

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
| Skeleton       | ![ReadyBtn] |
| Table          | ![WipBtn]   |
| Tag            | ![ReadyBtn] |
| Tooltip        | ![WipBtn]   |

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
