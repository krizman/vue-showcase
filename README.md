# vue-field-planner

## Proposed development IDEs

Any IDE used for frontend / JavaScript development supports vue.js but with different development capabilities and experience.
I would suggest either **WebStorm** or **Visual Studio Code**.

I am using Visual Studio Code, because:

- it is free
- it is cross-platform (as is WebStorm)
- used by Evan You - the creator of Vue.js
- proposed by [vue.js official documentation](https://vuejs.org/v2/guide/typescript.html#Editor-Support) for use with TypeScript

If you decide to use VS Code, get some [useful vue.js extensions](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial#_vetur-extension)

## Dev, Build and Run Prerequisites

Make sure node.js and Node Package Manager (npm) are installed on your system.

You can get both by installing [node.js](https://nodejs.org/en/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## TODOs:

- [ ] introduce common store/state object which contains application data (which is currently hardcoded and spread throughout vue.js components) and all the getters/setters/mutations it supports
- [ ] introduce "Season" and "Area/Region" codelists. Implement UI selectors, which cause the table to show relevant "Season" and "Region" data.
- [ ] Add router and use Season and Region in the URL
- [ ] introduce HTTP requests to persist the store data
- [ ] introduce TypeScript
