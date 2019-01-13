import Command from './Command';
import fetch from 'node-fetch';
import ExecutionContext from '../../module/commons/utils/constants/ExecutionContext';
import ModuleType from '../modules/ModuleType';
import CommonsModuleFactory from '../../module/commons/utils/factories/CommonsModuleFactory';
import EvertokModuleFactory from '../../module/evertok/utils/factories/EvertokModuleFactory';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommandImpl implements Command {
  private isRemoteExecution: boolean = false;

  constructor(isRemoteExecution: boolean = false) {
    this.isRemoteExecution = isRemoteExecution;
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  async execute(moduleName: ModuleType, serviceName: string, methodName: string, returnType: string, parameters: any): Promise<Object[]> {
    if (this.isRemote()) {
      const rawResponse = await fetch('http://localhost:8090/remote', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ moduleName, methodName, returnType, serviceName, parameters })
      });
      const response = await rawResponse.json();
      return response;
    } else {
      switch (moduleName) {
        case ModuleType.COMMONS:
          return CommonsModuleFactory.create(ExecutionContext.LOCAL)[`get${serviceName}`](parameters);
        case ModuleType.EVERTOK:
          return EvertokModuleFactory.create(ExecutionContext.LOCAL)[`get${serviceName}`](parameters);
      }
    }
  }
}
