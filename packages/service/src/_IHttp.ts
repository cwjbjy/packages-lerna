import AuthEnum from './_Auth'
import {AxiosRequestConfig} from 'axios'
export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

export interface IParams {
    url:string,
    auth?:AuthEnum,
    data?:any
}

export interface IRequestParams extends IParams{
    method:Method
}

export interface IFetchParams{
    url:string,
    config:RequestInit
}

export interface IToken{
    type:'cookie'|'local'|'session', //从哪种媒介获取
    from:string, //源key
    to:string //目标key
}

export interface IFetchRequest{
    token?:IToken
}

export interface IAxiosRequest extends AxiosRequestConfig{
    token?:IToken
}