const fs = require('fs');

function runPigeonScript(script) {
    const lines = script.split('\n');
    const variables = {};
    let output = [];

    function log(message) {
        output.push(`[Голубь]: ${message}`);
    }

    for (let line of lines) {
        line = line.trim();

        // --- Объявление переменной ---
        const varMatch = line.match(/пусть будет (\w+) = (-?\d+)/);
        if (varMatch) {
            const name = varMatch[1];
            const value = parseInt(varMatch[2]);
            variables[name] = value;
            log(`Нашёл кружок "${name}" со значением ${value} 🍞`);
            continue;
        }

        // --- Вывод ---
        const sayMatch = line.match(/ты важно воркуешь: "(.+?)"/i);
        if (sayMatch) {
            const message = sayMatch[1]
                .replace(/\+ count/g, () => variables['count'])
                .replace(/\+ x/g, () => variables['x']);
            log(`📢 "${message}"`);
            continue;
        }

        // --- Уменьшение переменной ---
        const decMatch = line.match(/ты клюёшь одну крошку, (\w+) уменьшается/i);
        if (decMatch && variables[decMatch[1]] !== undefined) {
            variables[decMatch[1]]--;
            log(`📉 ${decMatch[1]} = ${variables[decMatch[1]]}`);
            continue;
        }

        // --- Проверка условия ---
        const loopMatch = line.match(/пока $$(\w+) > 0$$/i);
        if (loopMatch) {
            const varName = loopMatch[1];
            while (variables[varName] > 0) {
                // Имитируем выполнение тела цикла
                log(`🌀 Кручу цикл: ${varName} = ${variables[varName]}`);
                variables[varName]--;
            }
            continue;
        }

        // --- Конец программы ---
        if (line.includes('гур гуру-гур')) {
            log(`🕊️ Голубь улетел... но оставил подарочек 💩`);
            break;
        }

        // --- Неизвестная команда ---
        if (line.length > 0 && !line.startsWith('//') && !line.startsWith('{') && !line.startsWith('}')) {
            log(`❓ Не понял команду: "${line}"`);
        }
    }

    return output.join('\n');
}

// Запуск файла
const fileName = process.argv[2];

if (!fileName) {
    console.log("Использование: node pigeon-interpreter.js <файл>");
    process.exit(1);
}

const code = fs.readFileSync(fileName, 'utf8');
const result = runPigeonScript(code);

console.log(result);
