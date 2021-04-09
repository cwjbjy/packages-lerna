import HttpClient from './_HttpClient';
import { IRequestParams, IFetchParams, IFetchRequest } from './_IHttp';
declare class FetchClient extends HttpClient {
    constructor(args?: IFetchRequest);
    protected interceptorsRequest(params: IRequestParams): Promise<IFetchParams>;
    protected interceptorsResponse(res: Response): Promise<Response>;
    protected sendHttp(url: string, config: RequestInit): Promise<Response>;
    protected requestFactory(params: IRequestParams): Promise<Response>;
}
export default FetchClient;
