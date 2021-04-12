import HttpClient from './_HttpClient';
import { IRequestParams, IAxiosRequest } from './_IHttp';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class AxiosClient extends HttpClient {
    private instance;
    private auth;
    constructor({ token, ...params }: IAxiosRequest);
    protected interceptorsRequest(): void;
    protected interceptorsResponse(): void;
    protected sendHttp(url: string, config: AxiosRequestConfig): Promise<AxiosResponse<any>>;
    protected requestFactory({ url, auth, ...params }: IRequestParams): Promise<AxiosResponse<any>>;
}
export default AxiosClient;
