 
 # [Godev.run](https://godev.run)

<picture>
    <source srcset="./.github/logo-dark.png" media="(prefers-color-scheme: light)">
    <source srcset="./.github/logo-white.png" media="(prefers-color-scheme: white)">
    <img src="./.github/logo-dark.png" alt="logo">
</picture>

## Overview

GoDev.Run is a personal project inspired from [it-tools](https://github.com/CorentinTh/it-tools) by [Corentin Th](https://github.com/CorentinTh). to try what else i can do with javascript and how far we can go in building tools entirely on the client side—no servers needed.  

GoDev.Run - Just You and Your Browser [Have a look !](https://godev.run).
 
**From docker hub:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 sunnydanu/godev-run:latest
```

**From github packages:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/sunnydanu/godev-run:latest
```

## Contribute

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the following extensions:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

with the following settings:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "i18n-ally.localesPaths": ["locales", "src/tools/*/locales"],
  "i18n-ally.keystyle": "nested"
}
```

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Create a new tool

To create a new tool, there is a script that generate the boilerplate of the new tool, simply run:

```sh
pnpm run script:create:tool my-tool-name
```

It will create a directory in `src/tools` with the correct files, and a the import in `src/tools/index.ts`. You will just need to add the imported tool in the proper category and develop the tool.

## Contact

For inquiries or suggestions, feel free to reach out to me on my [GitHub Profile](https://github.com/sunnydanu).

## Credits

Coded with ❤️ by [Sunny Danu](//sunnydaun.com).

This project is built upon the [it-tools](https://github.com/CorentinTh/it-tools) repository, which provides valuable tools and resources. I would like to express my gratitude to it's author, [Corentin Th](https://github.com/CorentinTh), and all the contributors for their contributions to the developer community.

I plan to maintain a fork of the original project to contribute back any changes or improvements. You can find the fork here: [sunnydanu/it-tools](https://github.com/sunnydanu/it-tools).

## Contributors

Big thanks to all the people who have already contributed!

[![contributors](https://contrib.rocks/image?repo=corentinth/it-tools)](https://github.com/corentinth/it-tools/graphs/contributors)
