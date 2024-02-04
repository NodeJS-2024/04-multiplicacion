
interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

// Orquestar como va afuncionar mi aplicacion
export class ServerApp {

  static run(options: RunOptions) {
    console.log('Server running...');
    console.log({ options });
  }

}