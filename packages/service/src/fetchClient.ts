import HttpClient from './_HttpClient'
import AuthEnum from './_Auth'
import {IRequestParams,IFetchParams,IFetchRequest} from './_IHttp'

class FetchClient extends HttpClient{
    constructor (args?:IFetchRequest) {
        super(args?args.token:undefined)
        this.headers={},
        this.config={
            cache:'no-cache',
        }       
    }
    protected interceptorsRequest(params:IRequestParams):Promise<IFetchParams>{
        return new Promise((resolve,reject)=>{
            let custom:string|undefined = this.token?.to
            let headers ={};
            if(custom){
                switch(params.auth){
                    case AuthEnum.ADMIN: //需要token
                    headers = Object.assign({},this.headers,{
                        [custom]:`Bearer ${this.getToken()}`
                    });
                    break;
                    case AuthEnum.USER: //前端固定token
                    headers = Object.assign({},this.headers,{
                        [custom]:`Basic 123`
                    });
                    break;
                    case AuthEnum.VISITOR: //不需要token
                    headers = Object.assign({},this.headers,{});
                    break;
                }
            }
            let config = Object.assign({},this.config,{method:params?.method,headers});
            if(params.data){
                if(params.data instanceof FormData){
                    config.body = params.data
                }else{
                    config.body = JSON.stringify(params.data)
                }
            }
            console.log('config',config)
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