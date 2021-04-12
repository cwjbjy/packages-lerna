import AuthEnum from './_Auth';
import { AxiosRequestConfig } from 'axios';
export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';
export interface IParams {
    url: string;
    auth?: AuthEnum;
    data?: any;
}
export interface IRequestParams extends IParams {
    method: Method;
}
export interface IFetchParams {
    url: string;
    config: RequestInit;
}
export interface IToken {
    type: 'cookie' | 'local' | 'session';
    from: string;
    to: string;
}
export interface IFetchRequest {
    token?: IToken;
}
export interface IAxiosRequest extends AxiosRequestConfig {
    token?: IToken;
}
