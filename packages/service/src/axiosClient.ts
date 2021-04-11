import HttpClient from './_HttpClient'
import AuthEnum from './_Auth'
import {IRequestParams,IAxiosRequest} from './_IHttp'
import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'

class AxiosClient extends HttpClient{
    private instance:AxiosInstance;
    private auth!:AuthEnum;
    constructor({token,...params}:IAxiosRequest){
        super(token);
        this.instance = axios.create(params)
        this.interceptorsRequest();
        this.interceptorsResponse()
    }
    protected interceptorsRequest(){
        const that = this;
        this.instance.interceptors.request.use(function(config){
            let custom:string|undefined = that.token?.to
            if(typeof that.token !== 'undefined'){
                if(custom){
                    if(that.auth === AuthEnum.ADMIN){
                        config.headers[custom]= that.getToken()
                    }else if(that.auth === AuthEnum.USER){
                        config.headers[custom]= '固定token'
                    }
                }
            }
            return config
        },function(error){
            return Promise.reject(error)
        })
    }

    protected interceptorsResponse(){
        this.instance.interceptors.response.use(function(response){
            return response
        },function(error){
            return Promise.reject(error)
        })
    }

    protected async sendHttp(url:string,config:AxiosRequestConfig){
        return this.instance.request({
            url,
            ...config
        })
    }

    protected async requestFactory({url,auth,...params}:IRequestParams):Promise<AxiosResponse<any>>{
        this.auth = auth as AuthEnum;
        let _params = {method:params.method};
        if(params.data){
            if(params.method === 'PUT' || params.method === 'POST' || params.method === 'PATCH'){
                Object.assign(_params,{data:params.data})
            }else{
                Object.assign(_params,{params:params.data})
            }
        }
        return await this.sendHttp(url,_params)
    }
}

export default AxiosClient