import Command from './Command';
import fetch from 'node-fetch';
const log = console.log;

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommandImpl implements Command {
  private isRemoteExecution: boolean = false;

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  async execute(methodName: string, returnType: string, serviceName: string, parameters: any): Promise<Object> {
    log(`Executing CommandImpl.execute() with methodName=${methodName}, returnType=${returnType}, serviceName=${serviceName}, parameters=${parameters}`);
    if (this.isRemote()) {
      const rawResponse = await fetch('http://localhost:8090/remote', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ methodName, returnType, serviceName, parameters })
      });
      const response = await rawResponse.json();
      log(`  result: ${JSON.stringify(response)}`);
      return response;
    } else {
      return null;
    }
  }
}