# Creating an NPM Package

## Introduction

This guide will walk you through the process of creating, publishing, and managing an NPM package from start to finish.

## Prerequisites

- Node.js installed on your computer
- NPM (comes with Node.js) installed on your computer
- An account on npmjs.com

## Steps

### 1. Set Up Your Project

1. **Create a Directory for Your Package:**
   ```bash
   mkdir my-npm-package
   cd my-npm-package
   ```

2. **Initialize the Package:**
   ```bash
   npm init
   ```
   Follow the prompts to set up your `package.json` file. You can accept the defaults or customize as needed.

### 2. Write Your Code

1. **Create Your Main File:**
   Create a file named `index.js` (or whatever you specified as the entry point in `package.json`).

   **This is just an example you can put your creativity into your package**
   
   Example `index.js`:
   ```javascript
   module.exports = function() {
       console.log("Hello, World!");
   };
   ```

1. **Add a README:**
   Create a `README.md` file to document your package.

   Example `README.md`:
   ```markdown
   # My NPM Package

   This is a simple NPM package that prints "Hello, World!" to the console.

   ## Installation

   ```bash
   npm install my-npm-package
   ```

   ## Usage

   ```javascript
   const myPackage = require('my-npm-package');
   myPackage();
   ```
   ```

### 3. Add Metadata

1. **Add Keywords and Author Information:**
   Update your `package.json` file to include keywords and author information.
   ```json
   {
     "name": "my-npm-package",
     "version": "1.0.0",
     "description": "A simple NPM package",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Your Name",
     "license": "ISC",
     "keywords": ["npm", "package", "example"]
   }
   ```

### 4. Publish Your Package

1. **Login to NPM:**
   ```bash
   npm login
   ```
   Enter your npmjs.com username, password, and email.

2. **Publish Your Package:**
   ```bash
   npm publish
   ```

### 5. Update Your Package

1. **Make Changes:**
   Update your code or documentation as needed.

2. **Update the Version:**
   Follow semantic versioning (e.g., `1.0.1` for a patch, `1.1.0` for a minor update, `2.0.0` for a major update).
   ```bash
   npm version patch
   # or
   npm version minor
   # or
   npm version major
   ```

3. **Publish the Update:**
   ```bash
   npm publish
   ```

# How to use a package

# Number Conversion

This is a module to convert numbers between binary and decimal formats.

## Installation

```sh
npm install leaner-convc
```
## Usage

``` js
const { binaryToDecimal, decimalToBinary } = require('number-conversion');

console.log(binaryToDecimal('1010')); // 10
console.log(decimalToBinary(10));     // 1010
```

## Functions

binaryToDecimal(binary): Converts a binary string to a decimal number.
decimalToBinary(decimal): Converts a decimal number to a binary string.


## License
MIT

