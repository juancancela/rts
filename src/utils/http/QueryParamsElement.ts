/**
 * @description QueryParamsElement
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class QueryParamsElement {
  private value: any;
  private key: string;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  getKey(): string {
    return this.key;
  }

  getValue(): string {
    if (this.value && this.value.constructor.name === 'Object') {
      return JSON.stringify(this.value);
    }
    return this.value;
  }
}
