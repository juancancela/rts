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

  async executeRemotely(moduleName: Modules, serviceName: string, methodName: string, parameters: any, remoteEndpoint: string) {
    return (await fetch(remoteEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ moduleName, serviceName, methodName, parameters })
    })).json();
  }

  async executeLocally(module: any, serviceName: string, methodName: string, parameters: any) {
    const targetService = module[serviceName];
    return targetService[methodName](parameters);
  }

  async execute(moduleName: Modules, serviceName: string, methodName: string, parameters: any, remoteEndpoint?: string): Promise<Object[]> {
    return this.isRemote()
      ? await this.executeRemotely(moduleName, serviceName, methodName, parameters, remoteEndpoint)
      : await this.executeLocally(this.getModule(moduleName), serviceName, methodName, parameters);
  }
}
