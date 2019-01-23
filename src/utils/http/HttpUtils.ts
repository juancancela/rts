import fetch from 'node-fetch';

export enum HTTPMethod {
    GET = 'GET',
    POST = 'POST'
};

export default class HttpUtils {
    public static async exec(method: HTTPMethod, url: string, queryParams?: any, body?: any, headers?: any): Promise<any> {
        try {
            let response = await fetch(url, {
                method,
                headers
            });
            response = await response.json();
            return response;
        } catch (error) {
            throw new Error('zaraza');
        }
    }
}