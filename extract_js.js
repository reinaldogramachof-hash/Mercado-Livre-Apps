const fs = require('fs');
const path = 'c:\\Users\\reina\\OneDrive\\Desktop\\Projetos\\Mercado Livre\\apps\\plena_barbearia.html';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split(/\r?\n/);

// Script principal começa na linha 2039 (index 2038 ou 2039?)
// Grep disse: 2039: <script>
// Array é 0-based. Se Grep usa 1-based (padrão), então linha 2039 é index 2038.
// Vamos verificar o conteúdo dessa linha.

const scriptStartLineNumber = 2039;
const scriptEndLineNumber = 3603;

// Index = LineNumber - 1
const startIndex = scriptStartLineNumber; // Começa DEPOIS da tag <script>
const endIndex = scriptEndLineNumber - 1; // Termina ANTES da tag </script>

const scriptContent = lines.slice(startIndex, endIndex).join('\n');
fs.writeFileSync('check_syntax.js', scriptContent);
console.log('JS extracted to check_syntax.js');