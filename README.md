# cocotte-web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Locales

The app is currently localized in FR, translations can be found in the `i18n` folder.

## Deployment

Websites are hosted on surge.

### cocotte-app.com

```
git checkout master
npm run build
cd dist
surge -d cocotte-app.com
```

### enceinte-manger.com

```
git checkout enceinte-manger.com
npm run build
cd dist
surge -d enceinte-manger.com
```

### enceinte-alimentation.com

```
git checkout enceinte-alimentation.com
npm run build
cd dist
surge -d enceinte-manger.com
```

### alimentation-enceinte.com

```
git checkout alimentation-enceinte.com
npm run build
cd dist
surge -d enceinte-manger.com
```
