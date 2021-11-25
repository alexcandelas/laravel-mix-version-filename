# Laravel Mix Version Filenames

Laravel Mix plugin that changes the contents of your `mix-manifest` file to include the versioned hash of each asset into the filename, instead of using a query string.

Before:
```js
{
    "/js/app.js": "/js/app.js?id=a1e81da221dff2916079",
    "/css/app.css": "/css/app.css?id=69370019c022d6ad6d4c"
}
```

After:
```js
{
    "/js/app.js": "/js/app.a1e81da221dff2916079.js",
    "/css/app.css": "/css/app.69370019c022d6ad6d4c.css"
}
```

It does not modify the files, just the manifest.

## Instalation
```sh
npm install -D laravel-mix-version-filename
```

## Usage

Import the plugin at the top of your `webpack.mix.js` file:
```js
require('laravel-mix-version-filename');
````

And then, instead of using `mix.version()`, use:
```js
mix.versionFilenames()
````
