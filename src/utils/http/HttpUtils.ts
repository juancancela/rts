import fetch from 'node-fetch';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST'
}

export default class HttpUtils {
  private static composeUrl(url: string, queryParams: string) {
    return `${url}?${queryParams}`;
  }

  public static async exec(method: HTTPMethod, url: string, queryParams?: string, body?: any, headers?: any): Promise<any> {
    try {
      let response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body)
      });
      response = await response.json();
      return response;
    } catch (error) {
      throw new Error('zaraza');
    }
  }
}
