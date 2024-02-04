import fs from 'fs';

let outputMessage = '';
const base = 5;
const headerMessage = `
===========================
       Tabla del ${ base }
===========================\n
`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

const outputPath = 'outputs';

// Crear la carpeta de forma recursiva
// ejemplo de outputs/folder1/folder2 ...
fs.mkdirSync(outputPath, { recursive: true });

// Escribe en el archivo el texto y lo crea
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');



