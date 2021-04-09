import {IParams,IRequestParams,IToken} from './_IHttp';
import AuthEnum from './_Auth';
import Cookie from 'js-cookie'

abstract class HttpClient{
    protected config:any;
    protected token:IToken|undefined;
    protected abstract interceptorsRequest(params:any):any;
    protected abstract interceptorsResponse(res:Response):any;
    protected abstract sendHttp(url:string,config:RequestInit):any; //发送请求
    protected abstract requestFactory(params:IRequestParams):any; //请求工厂

    constructor(args:IToken|undefined){
        try{
            this.token = args
        }catch(e){
            throw new Error('err'+ e)
        }
    }

    protected getToken():string{
        if(this.token?.type === 'cookie'){
            return <string>Cookie.get(this.token.from)
        }else if(this.token?.type === 'local'){
            return <string>localStorage.getItem(this.token.from)
        }else if(this.token?.type === 'session'){
            return <string>sessionStorage.getItem(this.token.from)
        }else{
            return ''
        }
    }

    async get({url,data,auth=AuthEnum.VISITOR}:IParams){
        return await this.requestFactory({
            method:'GET',
            url,
            data,
            auth
        })
    }

    async post({url,data,auth=AuthEnum.VISITOR}:IParams){
        return await this.requestFactory({
            method:'POST',
            url,
            data,
            auth
        })
    }

    async patch({url,data,auth=AuthEnum.VISITOR}:IParams){
        return await this.requestFactory({
            method:'PATCH',
            url,
            data,
            auth
        })
    }

    async delete({url,data,auth=AuthEnum.VISITOR}:IParams){
        return await this.requestFactory({
            method:'DELETE',
            url,
            data,
            auth
        })
    }
    
    async put({url,data,auth=AuthEnum.VISITOR}:IParams){
        return await this.requestFactory({
            method:'PUT',
            url,
            data,
            auth
        })
    }
}

export default HttpClient