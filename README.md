# **PigeonScript 🐦**

**PigeonScript** — это юмористический язык программирования, вдохновлённый поведением голубей. Он использует птичьи звуки, действия и метафоры для описания логики программы. Этот проект включает:
1. **Таблицу перевода** из JavaScript в PigeonScript.
2. **Модуль перевода**, который преобразует простой JavaScript-код в «голубиную» форму.

---

## **Как использовать**

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/hawk2012/PigeonScript.git  
   cd pigeonscript
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Переведите ваш JavaScript-код в PigeonScript:
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

4. Получите результат:
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

## **Таблица соответствий: JavaScript → PigeonScript**

| JavaScript                     | PigeonScript                          | Описание                                                                 |
|--------------------------------|---------------------------------------|--------------------------------------------------------------------------|
| `let x = 0;`                   | `variable crumbs = 0;`               | Объявление переменной. Используется еда (крошки, хлеб).                   |
| `if (condition) { ... }`       | `if (see_person()) { ... }`          | Проверяет, есть ли рядом человек или крошка.                             |
| `while (x < 10) { ... }`       | `while (crumbs < 10) { ... }`        | Цикл работает, пока условие истинно.                                     |
| `console.log("text");`         | `say("coo-coo!");`                   | Вывод сообщения через воркование.                                        |
| `function eat() { ... }`       | `function eat_crumbs(amount)`        | Объявляет функцию.                                                       |
| `return value;`                | `return crumbs;`                     | Возвращает значение из функции.                                           |
| `for (let i = 0; i < n;)`      | `while (i < n) { circle(i); }`       | Заменить `for` на `while` с действием "облетать".                        |
| `try { ... } catch { ... }`    | `try { ... } catch (cat) { }`        | Обработка исключений через встречи с кошкой.                             |

---

## **Примеры**

### Исходный JavaScript:
```javascript
let food = 0;
while (food < 3) {
    console.log("Searching for food...");
    food++;
}
console.log("Found enough food!");
```

### Переведённый PigeonScript:
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

## **Модуль перевода**

Модуль перевода использует регулярные выражения и базовые правила для преобразования JavaScript-кода в PigeonScript. Вот как он работает:

### Файл: `pigeonscript-translator.js`

```javascript
module.exports = {
    translate: function (jsCode) {
        // 1. Замена `let` на "variable"
        jsCode = jsCode.replace(/let\s+(\w+)\s*=\s*(\d+);/g, 'variable $1 = $2;');

        // 2. Замена `console.log` на "say"
        jsCode = jsCode.replace(/console\.log\("([^"]+)"\);/g, 'say("$1");');

        // 3. Замена `while` на "while"
        jsCode = jsCode.replace(/while\s*\(([^)]+)\)\s*\{/g, 'while ($1) {');

        // 4. Замена `++` на "увеличить на 1"
        jsCode = jsCode.replace(/(\w+)\+\+/g, '$1 = $1 + 1;');

        // 5. Добавление голубиных комментариев
        jsCode = jsCode.replace(/\};/g, '}\nsay("gool-gool!");');

        return jsCode;
    }
};
```

---

## **Примеры кода**

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

## **Как принять участие в проекте**

Если хотите помочь развивать проект, вы можете:
1. Добавлять новые правила перевода.
2. Создать **интерпретатор**, исполняющий PigeonScript.
3. Добавить поддержку других языков программирования.
4. Сделать CLI-версию, веб-редактор или даже игру.

---

## **Лицензия**

Проект распространяется под лицензией MIT. Подробности смотрите в файле [LICENSE](LICENSE).

---

Надеюсь, вам понравится этот проект! Делитесь им с друзьями и помогайте делать его ещё смешнее и круче! 🐦✨
