import fetch from 'node-fetch';
import { HTTPMethodType } from './HttpMethodType';
import * as _ from 'lodash';
const log = console.log;

/**
 * Executes an HTTP request with the given parameters
 * @param method HTTP method (Post, Get, Put, etc)
 * @param url request destination
 * @param queryParams query parameters of request
 * @param body body of request
 * @param headers headers of request
 *
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export async function exec(
  method: HTTPMethodType,
  url: string,
  queryParams: string = '',
  body: any = {},
  headers: any = {}
): Promise<any> {
  try {
    let options = {};
    !_.isEmpty(method) ? (options['method'] = method) : '';
    !_.isEmpty(headers) ? (options['headers'] = headers) : '';
    !_.isEmpty(body) ? (options['body'] = JSON.stringify(body)) : '';
    return (await fetch(url + queryParams, options)).json();
  } catch (error) {
    throw new Error('http exec error');
  }
}
