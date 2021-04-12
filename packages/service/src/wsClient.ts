interface IWsQueue {
  [key: string]: Function;
}

export default class WsClient {
  private Instance!: WebSocket;
  private url!: string;
  private time: number = 30000;
  private resQueue: IWsQueue = {}; //响应队列
  private keepAlive!: any;

  constructor(url: string) {
    this.url = url;
    let that = this;
    /* 保持通讯长连接 */
    this.keepAlive = {
      timeInstance: null,
      reset() {
        clearTimeout(this.timeInstance);
        this.bounce();
      },
      bounce() {
        this.timeInstance = setTimeout(() => {
          that.sendMessage({ type: "heart", text: "putong" });
        }, that.time);
      },
    };
  }

  private _connect() {
    this.Instance = new WebSocket(this.url);
    this._open();
    this._message();
    this._error();
    this._close();
    // this._heart() //连接后永不关闭
  }

  private _heart(){
      setTimeout(()=>{
          if(this.Instance.readyState === WebSocket.OPEN){
              this._heart()
          }else{
              this._connect()
          }
      },this.time)
  }

  private _open() {
    this.Instance.onopen = () => {
      console.log("WebSocket is open");
      if (this.Instance.readyState === WebSocket.OPEN) {
        this.keepAlive.bounce();
      }
    };
  }

  private _message() {
    let that = this;
    this.Instance.onmessage = (e) => {
      let data = JSON.parse(e.data);
      if (data.name !== "heart") {
        for (let key in this.resQueue) {
          this.resQueue[key].call(that, JSON.parse(e.data), key);
        }
      }
      this.keepAlive.reset();
    };
  }

  private _error() {
    this.Instance.onerror = () => {
      console.log("异常关闭");
    };
  }

  private _close() {
    this.Instance.onclose = () => {
      console.log("WebSocket closed");
    };
  }

  public connect() {
    return this._connect();
  }

  public sendMessage(data: string | { [key: string]: string }) {
    let msg: string = JSON.stringify(data);
    if (this.Instance.readyState === WebSocket.OPEN) {
      this.Instance.send(msg);
    }
    return this;
  }

  public onMessage(callback: Function) {
    this.resQueue[`wj${new Date().getTime()}`] = callback;
    return this;
  }

  public closeMessage(key: string) {
    delete this.resQueue[key];
  }

  public close() {
    this.Instance.close();
  }
}
