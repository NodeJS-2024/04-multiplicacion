import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

  constructor() {
    // repository: StorageRespository
  }

  execute({
    fileContent,
    fileDestination = 'outputs', 
    fileName = 'table',
  }: Options): boolean {

    try {
      // Crear la carpeta de forma recursiva
      // ejemplo de outputs/folder1/folder2 ...
      fs.mkdirSync(fileDestination, { recursive: true });
  
      // Escribe en el archivo el texto y lo crea
      fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);
      
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }

  }

}
