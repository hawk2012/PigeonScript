module.exports = {
    translate: function (jsCode) {
        // 1. Замена let на "переменная"
        jsCode = jsCode.replace(/let\s+(\w+)\s*=\s*(\d+);/g, 'переменная $1 = $2;');

        // 2. Замена console.log на "скажи"
        jsCode = jsCode.replace(/console\.log\("([^"]+)"\);/g, 'скажи("$1");');

        // 3. Замена while на "пока"
        jsCode = jsCode.replace(/while\s*\(([^)]+)\)\s*\{/g, 'пока ($1) {');

        // 4. Замена ++ на "увеличить на 1"
        jsCode = jsCode.replace(/(\w+)\+\+/g, '$1 = $1 + 1;');

        // 5. Добавление голубиных комментариев
        jsCode = jsCode.replace(/\};/g, '}\nскажи("гул-гул!");');

        return jsCode;
    }
};
