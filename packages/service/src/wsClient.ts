interface IWsQueue{
    [key:string]:Function
}

export default class WsClient{
    private Instance!:WebSocket;
    private url!:string;
    private time:number = 30000;
    private resQueue:IWsQueue = {}; //响应队列

    constructor(url:string){
        this.url = url;
    }

    private _connect(){
        this.Instance = new WebSocket(this.url);
        this._open();
        this._message();
        this._error();
        this._close();
        this._heart();
    }

    private _open(){
        this.Instance.onopen=()=>{
            console.log('WebSocket is open')
        }
    }

    private _message(){
        let that = this;
        this.Instance.onmessage = (e)=>{
            for(let key in this.resQueue){
                this.resQueue[key].call(that,JSON.parse(e.data),key)
            }
        }
    }

    private _error(){
        this.Instance.onerror = ()=>{
            console.log('异常关闭')
        }
    }

    private _close(){
        this.Instance.onclose = ()=>{
            console.log('WebSocket closed')
        }
    }

    private _heart(){

    }

    public connect(){
        return this._connect()
    }

    public sendMessage(data:string|{[key:string]:string}){
        let msg:string = JSON.stringify(data);
        if(this.Instance.readyState === WebSocket.OPEN){
            this.Instance.send(msg)
        }
        return this
    }

    public onMessage(callback:Function){
        this.resQueue[`wj${new Date().getTime()}`] = callback;
        return this
    }

    public closeMessage(key:string){
        delete this.resQueue[key]
    }

    public close(){
        this.Instance.close()
    }
}