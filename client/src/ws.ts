import socketIOClient from "socket.io-client";
export const WS = "localhost:8080";
export const ws = socketIOClient(WS);
