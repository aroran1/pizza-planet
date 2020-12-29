# pizza-app

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

## Adding Lazy loading to project
This will require to include babel to the project which can be done via 
```
npx babel-upgrade
```

### Adding Dynamic Imports
Add `@babel/syntax-dynamic-import` plugin as dev dependency and include it in babelrc file which will help bundling the app into smaller parts and only load what is needed by the users and avoid making the main app bundle file bigger in size which may take a long time to load.

Once in place, update the page / components imports on thge routes/index.js as below:
```
// import Menu from "../components/Menu.vue";
const Menu = () => import("../components/Menu.vue");
```
Note: you still see the requests for all the packages in the browsers network tab but with 304 and "Failed to load response" at the initial page load but no preview data but as you navigate to different page the actual request for these bundles will be fullfiled with 200 response and marked as prefetch.

You can combine the imports from the multiple files into 1 package by using name webpackChunkName as below:
```
const Menu = (/* webpackChunkName: "menu" */) => import("../components/Menu.vue");
const About = (/* webpackChunkName: "menu" */) => import("../components/About.vue");
```

You can develop this tecnique further by spliting your hidden if-else component logic to seperate components so they are bundled correctly.