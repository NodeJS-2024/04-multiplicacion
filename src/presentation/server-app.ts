import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

// Orquestar como va afuncionar mi aplicacion
export class ServerApp {

  static run({ 
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log('Server running...');
    // console.log({ options });

    const table = new CreateTable()
      .execute({ base, limit });

    const wasCreated = new SaveFile()
      .execute({
        fileContent: table, 
        // destination: `outputs/table-${ base }`
        fileDestination,
        fileName
      });

    if (showTable) console.log(table);

    ( wasCreated ) 
        ? console.log('File created!')
        : console.log('File not created!');
    
  }

}