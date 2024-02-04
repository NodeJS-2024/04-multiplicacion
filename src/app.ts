
// argumentos validos
// console.log(process.argv);
// const [ tsnode, app, ...args] = process.argv;
// console.log(args);

import { yarg } from './config/plugins/args.plugin';
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

  console.log(yarg);

}