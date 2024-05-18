import { Server } from "http";
export interface API {
  createServer(): Server;
}
