const fs = require('fs');
const path = 'c:\\Users\\reina\\OneDrive\\Desktop\\Projetos\\Mercado Livre\\apps\\plena_barbearia.html';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split(/\r?\n/);

// CSS começa na linha 48 (<style>)
// Termina na linha 299 (</style>)
// Conteúdo: 49 a 299 (exclusive)

const start = 49; // linha 50
const end = 299; // linha 300

const cssContent = lines.slice(start - 1, end - 1).join('\n'); // ajuste de index
fs.writeFileSync('check_syntax.css', cssContent);
console.log('CSS extracted');