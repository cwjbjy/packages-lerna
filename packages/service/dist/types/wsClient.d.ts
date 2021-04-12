export default class WsClient {
    private Instance;
    private url;
    private time;
    private resQueue;
    private keepAlive;
    constructor(url: string);
    private _connect;
    private _heart;
    private _open;
    private _message;
    private _error;
    private _close;
    connect(): void;
    sendMessage(data: string | {
        [key: string]: string;
    }): this;
    onMessage(callback: Function): this;
    closeMessage(key: string): void;
    close(): void;
}
