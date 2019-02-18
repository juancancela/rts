import ApplicationErrorCodeType from './ApplicationErrorCodeType';

/**
 * @description ApplicationError
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class ApplicationError {
  private code: ApplicationErrorCodeType;
  private message: string;
  private stack: any;

  /**
   * constructor
   * @param code application error code
   * @param message application error message
   * @param stack application error stack
   */
  constructor(code: ApplicationErrorCodeType, message: string) {
    this.code = code;
    this.message = message;
    this.stack = new Error().stack;
  }

  /**
   * @returns a JSON representation of an application error
   */
  toJSON() {
    const { code, message, stack } = this;
    return { code, message, stack };
  }
}
