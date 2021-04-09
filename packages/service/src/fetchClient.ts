import HttpClient from './_HttpClient'
import AuthEnum from './_Auth'
import {IRequestParams,IFetchParams,IFetchRequest} from './_IHttp'

class FetchClient extends HttpClient{
    protected config:RequestInit;
    protected headers = new Headers()
    constructor (args?:IFetchRequest) {
        super(args?args.token:undefined)
        this.config={
            cache:'no-cache',
            headers:{}
        }       
    }
    protected interceptorsRequest(params:IRequestParams):Promise<IFetchParams>{
        return new Promise((resolve,reject)=>{
            if(typeof this.token !== 'undefined'){
                if(params.auth === AuthEnum.USER){
                    this.headers.set(this.token.to,'固定token')
                }else if(params.auth === AuthEnum.ADMIN){
                    this.headers.set(this.token.to,this.getToken())
                }else{
                    this.headers.delete(this.token.to)
                }
            }

            let config = Object.assign({},this.config,{methods:params?.method,header:this.headers});
            if(params.data){
                if(params.data instanceof FormData){
                    config.body = params.data
                }else{
                    config.body = JSON.stringify(params.data)
                }
            }
            resolve({
                url:params.url,
                config
            })
        })
    }

    protected interceptorsResponse(res:Response):Promise<Response>{
        return new Promise((resolve,reject)=>{
            resolve(res.json())
        })
    }

    protected sendHttp(url:string,config:RequestInit):Promise<Response>{
        return fetch(url,config)
    }

    protected async requestFactory(params:IRequestParams):Promise<Response>{
        let req = await this.interceptorsRequest(params);
        let res = await this.sendHttp(req.url,req.config)
        return await this.interceptorsResponse(res)
    }
}

export default FetchClient