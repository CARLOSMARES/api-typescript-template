import * as http from "http";
export class ServerHTTP {
  private address: string;
  private host: string;
  private port: number;
  private httpServer: http.Server;

  constructor(host: string, port: number, httpServer: http.Server) {
    this.host = host;
    this.port = port;
    this.httpServer = httpServer;
    this.address = `${this.host}:${this.port}`;
  }

  public listen(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.httpServer.listen(this.port, () => {
        console.log(`⚡️[server]: Server is running at ${this.address}`);
        console.log("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
