import yargs from 'yargs';
import { hideBin }  from 'yargs/helpers';

export const yarg = yargs( hideBin(process.argv) )
  .option('b', { // como quiero que funcione esa bandera
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
  })
  .check((argv, options) => {
    // console.log({ argv, options });

    if (argv.b < 1) throw 'Error: base must be greater than 0';
    
    return true;
  })
  .parseSync();
