import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log(yarg);
const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
// const base = 5;
// const limit = 10;
const headerMessage = `
===========================
       Tabla del ${ base }
===========================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = 'outputs';

// Crear la carpeta de forma recursiva
// ejemplo de outputs/folder1/folder2 ...
fs.mkdirSync(outputPath, { recursive: true });

// Escribe en el archivo el texto y lo crea
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');



