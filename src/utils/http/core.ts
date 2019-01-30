import fetch from 'node-fetch';

/**
 * @description List of HTTP methods
 */
export enum HTTPMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS'
}

/**
 * Executes an HTTP request with the given parameters
 * @param method HTTP method (Post, Get, Put, etc)
 * @param url request destination
 * @param queryParams query parameters of request
 * @param body body of request
 * @param headers headers of request
 */
export async function exec(method: HTTPMethod, url: string, queryParams?: string, body?: any, headers?: any): Promise<any> {
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
