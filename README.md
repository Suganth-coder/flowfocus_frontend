## Pre Requisites

`Basic Dependencies`

* [node](https://nodejs.org/en)
* [npx](https://www.npmjs.com/package/npx)
* [php](https://www.php.net/manual/en/install.php)
* [webpack.js](https://webpack.js.org/)
* [phoeni_php](https://github.com/Suganth-coder/phoeni_php)

## Folder Structure

* `>` indicates Folder

```
    > assets
        > body
        > head
        > image
    > css
    > js
        > src

```
* assets --> includes body, head, image
* css includes all css files
* js have two parts
    * Source file path `js/src`
    * Target file `js/`

## Commands

#### To Run Bundler (Webpack)

Without configuration

    npx webpack

With configuration

    npx webpack --config webpack.config.js

---

Setting up Alias

```
alias js-build="npm run obfuscator js/src/ --output ./js/obs/ && npm run build"g
```