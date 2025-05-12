# **PigeonScript 🕊️**

**PigeonScript** is a humorous programming language inspired by the behavior of pigeons. It uses pigeon sounds and actions to describe program logic. This project includes:
1. A **translation table** from JavaScript to PigeonScript.
2. A **translator module** that converts simple JavaScript code into PigeonScript.

---

## **How to Use**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pigeonscript.git
   cd pigeonscript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Translate your JavaScript code into PigeonScript:
   ```javascript
   const translator = require('./pigeonscript-translator');

   const jsCode = `
   let crumbs = 0;
   while (crumbs < 5) {
       console.log("Looking for food...");
       crumbs++;
   }
   console.log("Eating all crumbs!");
   `;

   const pigeonCode = translator.translate(jsCode);
   console.log(pigeonCode);
   ```

4. Get the result:
   ```pigeon
   variable crumbs = 0;
   while (crumbs < 5) {
       say("coo-coo!");
       crumbs = crumbs + 1;
   }
   say("yum-coo-coo!");
   ```

---

## **Translation Table: JavaScript → PigeonScript**

| JavaScript                     | PigeonScript                          | Description                                                                 |
|--------------------------------|---------------------------------------|-----------------------------------------------------------------------------|
| `let x = 0;`                   | `variable crumbs = 0;`               | Declare a variable. Use food (crumbs, bread) instead of names.              |
| `if (condition) { ... }`       | `if (see_person()) { ... }`          | Check if a person or food is nearby.                                       |
| `while (x < 10) { ... }`       | `while (crumbs < 10) { ... }`        | Loop continues as long as the condition is true.                           |
| `console.log("text");`         | `say("coo-coo!");`                   | Output a message to the console using pigeon communication.                |
| `function eat() { ... }`       | `function eat_crumbs(amount)`        | Declare a function.                                                         |
| `return value;`                | `return crumbs;`                     | Return a value from a function.                                             |
| `for (let i = 0; i < n;)`      | `while (i < n) { circle(i); }`       | Replace `for` loops with `while` and "circling" actions.                    |
| `try { ... } catch { ... }`    | `try { ... } catch (cat) { }`        | Handle exceptions through encounters with cats.                            |

---

## **Examples**

### Original JavaScript:
```javascript
let food = 0;
while (food < 3) {
    console.log("Searching for food...");
    food++;
}
console.log("Found enough food!");
```

### Translated PigeonScript:
```pigeon
variable crumbs = 0;
while (crumbs < 3) {
    say("coo-coo!");
    crumbs = crumbs + 1;
}
say("yum-coo-coo!");
say("gool-gool!");
```

---

## **Translator Module**

The translator module uses regular expressions and basic rules to convert JavaScript into PigeonScript. Here's how it works:

### File: `pigeonscript-translator.js`

```javascript
module.exports = {
    translate: function (jsCode) {
        // 1. Replace `let` with "variable"
        jsCode = jsCode.replace(/let\s+(\w+)\s*=\s*(\d+);/g, 'variable $1 = $2;');

        // 2. Replace `console.log` with "say"
        jsCode = jsCode.replace(/console\.log\("([^"]+)"\);/g, 'say("$1");');

        // 3. Replace `while` with "while"
        jsCode = jsCode.replace(/while\s*\(([^)]+)\)\s*\{/g, 'while ($1) {');

        // 4. Replace `++` with "increase by 1"
        jsCode = jsCode.replace(/(\w+)\+\+/g, '$1 = $1 + 1;');

        // 5. Add pigeon comments
        jsCode = jsCode.replace(/\};/g, '}\nsay("gool-gool!");');

        return jsCode;
    }
};
```

---

## **Examples**

#### `example1.js`
```javascript
let crumbs = 0;
while (crumbs < 5) {
    console.log("Looking for food...");
    crumbs++;
}
console.log("Eating all crumbs!");
```

#### `example1.pigeon`
```pigeon
variable crumbs = 0;
while (crumbs < 5) {
    say("coo-coo!");
    crumbs = crumbs + 1;
}
say("yum-coo-coo!");
say("gool-gool!");
```

---

## **Contribution**

If you'd like to contribute to this project, you can:
1. Add more translation rules.
2. Create an interpreter to execute PigeonScript.
3. Add support for other programming languages.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

I hope you enjoy this project and share it with others! 🕊️
