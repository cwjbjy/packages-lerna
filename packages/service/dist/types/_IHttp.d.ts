import AuthEnum from './_Auth';
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
