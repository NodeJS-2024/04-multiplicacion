
// argumentos validos
// console.log(process.argv);
// const [ tsnode, app, ...args] = process.argv;
// console.log(args);

import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';
// console.log(process.argv);
// console.log(yarg);
// console.log(yarg.b);

// Funcion anonima auto invocada
(async() => {
  // console.log('Ejecutando');
  await main();
})();

async function main() {
  // console.log('Main ejecutado');

  const { 
    b: base, 
    l: limit, 
    s: showTable, 
    n: fileName, 
    d: fileDestination 
  } = yarg;

  // console.log(yarg);

  ServerApp.run({ 
    base, 
    limit, 
    showTable, 
    fileName, 
    fileDestination 
  });

}