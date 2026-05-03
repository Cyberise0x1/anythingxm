import { EventEmitter } from 'events';
class WebSocket extends EventEmitter {
  constructor() { super(); this.readyState = 3; }
  send() {}
  close() {}
  static OPEN = 1;
  static CLOSED = 3;
}
export class WebSocketServer extends EventEmitter {
  constructor() { super(); }
  close(cb) { if (cb) cb(); }
  handleUpgrade() {}
}
WebSocket.Server = WebSocketServer;
export default WebSocket;
