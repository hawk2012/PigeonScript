module.exports = {
    translate: function(jsCode) {
        let pigeonScript = [];

        const lines = jsCode.split('\n');

        lines.forEach(line => {
            line = line.trim();

            if (!line) return;

            // --- let ---
            const letMatch = line.match(/let\s+(\w+)\s*=\s*(.+);/);
            if (letMatch) {
                const varName = letMatch[1];
                const value = letMatch[2];
                pigeonScript.push(`Ты рисуешь след на песке — пусть будет ${varName} = ${value}.`);
                return;
            }

            // --- while ---
            const whileMatch = line.match(/while\s*$$(.+?)$$\s*\{/);
            if (whileMatch) {
                const condition = whileMatch[1];
                pigeonScript.push(`Пока (${condition}) — ты кружишься как будто забыл зачем прилетел:`);
                pigeonScript.push(' {');
                return;
            }

            // --- console.log ---
            const logMatch = line.match(/console\.log$$(.+?)$$;/);
            if (logMatch) {
                const message = logMatch[1];
                pigeonScript.push(`   Ты важно воркуешь: "${message}"`);
                pigeonScript.push('   Остальные птицы прислушались.');
                return;
            }

            // --- x++ ---
            const incMatch = line.match(/(\w+)\+\+;/);
            if (incMatch) {
                const varName = incMatch[1];
                pigeonScript.push(`   Ты находишь ещё одну крошку, ${varName} становится больше.`);
                pigeonScript.push('   Курлыкаешь от радости.');
                return;
            }

            // --- x-- ---
            const decMatch = line.match(/(\w+)--;/);
            if (decMatch) {
                const varName = decMatch[1];
                pigeonScript.push(`   Ты клюёшь одну крошку, ${varName} уменьшается.`); 
                pigeonScript.push('   Сосед завидует.');
                return;
            }

            // --- if ---
            const ifMatch = line.match(/if\s*$$(.+?)$$\s*\{/);
            if (ifMatch) {
                const condition = ifMatch[1];
                pigeonScript.push(`Если (${condition}) — проверь, стоит ли расправить крылья:`);
                pigeonScript.push(' {');
                return;
            }

            // --- else ---
            if (line.startsWith('else')) {
                pigeonScript.push('Иначе:');
                pigeonScript.push('   Ты нагадил и улетел.');
                pigeonScript.push(' {');
                return;
            }

            // --- function ---
            const funcMatch = line.match(/function\s+(\w+)\s*$$(.*?)$$\s*\{/);
            if (funcMatch) {
                const name = funcMatch[1];
                const args = funcMatch[2];
                pigeonScript.push(`Ты умеешь "${name}(${args})", вот как ты это делаешь:`);
                pigeonScript.push('   Иногда чешешь голову клювом.');
                pigeonScript.push(' {');
                return;
            }

            // --- for ---
            const forMatch = line.match(/for\s*$$(.*?);(.*?);(.*?)$$\s*\{/);
            if (forMatch) {
                const [init, cond, step] = forMatch.slice(1);
                pigeonScript.push(`Сделай раз за разом (${init}; ${cond}; ${step}), как будто ищешь лучшую крошку:`);
                pigeonScript.push('   Вертись, вертись!');
                return;
            }

            // --- default / unknown ---
            pigeonScript.push(`// Не понял, что делать — может, наклеваться? ${line}`);
        });

        // Концовка с апогеем воркования
        pigeonScript.push('');
        pigeonScript.push('Всё. Ты гордо расправил крылья... и нагадил.');
        pigeonScript.push('гур гуру-гур 🐦 💩');

        return pigeonScript.join('\n');
    }
};
