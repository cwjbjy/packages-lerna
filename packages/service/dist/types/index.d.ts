import FetchClient from './fetchClient';
import AxiosClient from './axiosClient';
import WSClient from './wsClient';
declare const HttpClient: {
    version: string;
    FetchClient: typeof FetchClient;
    AxiosClient: typeof AxiosClient;
    WSClient: typeof WSClient;
};
export default HttpClient;
