import Command from './Command';
import fetch from 'node-fetch';
import ExecutionContext from '../../module/commons/utils/constants/ExecutionContext';
import Modules from '../modules/Modules';
import CommonsModuleFactory from '../../module/commons/utils/factories/CommonsModuleFactory';
import EvertokModuleFactory from '../../module/evertok/utils/factories/EvertokModuleFactory';
import BaseModule from '../../module/commons/utils/modules/BaseModule';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommandImpl implements Command {
  private isRemoteExecution: boolean = false;
  private modules = {
    commons: CommonsModuleFactory.create(ExecutionContext.LOCAL),
    evertok: EvertokModuleFactory.create(ExecutionContext.LOCAL)
  };

  constructor(isRemoteExecution: boolean = false) {
    this.isRemoteExecution = isRemoteExecution;
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  getModule<T extends BaseModule>(moduleName: Modules): T {
    return this.modules[moduleName.toLowerCase()];
  }

  async execute(
    moduleName: Modules,
    serviceName: string,
    methodName: string,
    returnType: string,
    parameters: any,
    remoteEndpoint: string
  ): Promise<Object[]> {
    if (this.isRemote()) {
      const rawResponse = await fetch(remoteEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ moduleName, serviceName, methodName, returnType, parameters })
      });
      const response = await rawResponse.json();
      return response;
    } else {
      const _module = this.getModule(moduleName);
      const targetService = _module[serviceName];
      const targetMethod = targetService[methodName];
      return targetMethod(parameters);
    }
  }
}
