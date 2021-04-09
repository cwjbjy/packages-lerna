import FetchClient from './fetchClient';
declare const HttpClient: {
    version: string;
    FetchClient: typeof FetchClient;
};
export default HttpClient;
