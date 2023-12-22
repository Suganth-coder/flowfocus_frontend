## Pre Requisites

`Basic Dependencies`

* [node](https://nodejs.org/en)
* [php](https://www.php.net/manual/en/install.php)
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

### Pre Setup

#### Phoenitags Framework Initialization

[Framework Link](https://github.com/Suganth-coder/phoeni_php)

    phoeni init simple

#### Building NPM Packages

    npm build
    


#### Setting up alias

In this framework, js will be obfuscated and minified. For your convenience we have made into single command as follows

[Alias Guidance Link](https://www.tecmint.com/create-alias-in-linux/#:~:text=Creating%20Temporary%20Aliases%20in%20Linux,command%20you%20wish%20to%20alias.&text=You%20can%20then%20use%20%22wr,go%20to%20the%20webroot%20directory.)

```
alias js-build="npm run obfuscator js/src/ --output ./js/obs/ && npm run build"
```

`Note`: If any changes done to js files, run `js-build` after that

---

