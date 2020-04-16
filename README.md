# NodeJS API with Express and MongoDB

<div style="text-align:center"><img src="https://github.com/jdmathew.png" width="200" height="200" /></div>

> Justin Mathew.

---

### Table of Contents

You're sections headers will be used to reference location of destination.

- [Description](#description)
- [How To Use](#how-to-use)
- [Additional Resources](#additional-resources)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This is an RESTful API with NodeJS, Express and MongoDB

### Technologies

#### NodeJS

> This is a JavaScript Runtime that allows us to run JS outside of the browswer.

In a browswer based JavaScript a window object gets created wich holds a bunch of methods and things you might use such as document. For example `consol.log()` lives on the window object window is alway automatically prepended as

```javascript
window.console.log(5 + 5);
```

In NodeJS we have modules. This means that functions and variables live in a file.

Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```

By doing this, Node.js achieves a few things:

- It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.
- It helps to provide some global-looking variables that are actually specific to the module, such as:
  - The module and exports objects that the implementor can use to export values from the module.
  - The convenience variables **filename and **dirname, containing the module's absolute filename and directory path.

See [Node.js documentation](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

[Back To The Top](#NodeJS-API-with-Express-and-MongoDB)

---

## Getting started

Generate a package.json file

```
npm init
```

Install express package `npm express`

Install nodemon package `npm nodemon`

> These can be added to dependencies

## Exectuing and running a server

In [package.json] add `"start": "nodemon app.js"` to your scripts. This adds a script which called the package nodemon passing the file app.js

```json
"scripts": {
    "start": "nodemon app.js"

  }
```

Create a new file in your project directory called `app.js`

## Additional Resources

- [Markdown Cheat Sheet - Adam P on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images)
- [Daring Fireball Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
- [MarkDown in Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)

[Back To The Top](#markdown-worksheet)

---

## License

MIT License

Copyright (c) [2017][justin d mathew]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#markdown-worksheet)

---

## Author Info

- Twitter - [@JustinDMathew](https://twitter.com/JustinDMathew)
- Website - [Justin D Mathew](https://JDMathew.com)

[Back To The Top](#read-me-template))
