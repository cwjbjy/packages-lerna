import { IParams, IRequestParams, IToken } from './_IHttp';
declare abstract class HttpClient {
    protected headers: any;
    protected config: any;
    protected token: IToken | undefined;
    protected abstract interceptorsRequest(params: any): any;
    protected abstract interceptorsResponse(res: Response): any;
    protected abstract sendHttp(url: string, config: RequestInit): any;
    protected abstract requestFactory(params: IRequestParams): any;
    constructor(args: IToken | undefined);
    protected getToken(): string;
    get({ url, data, auth }: IParams): Promise<any>;
    post({ url, data, auth }: IParams): Promise<any>;
    patch({ url, data, auth }: IParams): Promise<any>;
    delete({ url, data, auth }: IParams): Promise<any>;
    put({ url, data, auth }: IParams): Promise<any>;
}
export default HttpClient;
