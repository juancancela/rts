import Command from './Command';
import fetch from 'node-fetch';
import ExecutionContext from '../../module/commons/utils/constants/ExecutionContext';
import Modules from '../modules/Modules';
import CommonsModuleFactory from '../../module/commons/utils/factories/CommonsModuleFactory';
import EvertokModuleFactory from '../../module/evertok/utils/factories/EvertokModuleFactory';
import AbstractBaseModule from '../../module/commons/utils/modules/AbstractBaseModule';

/**
 * @description
 * TBD
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

  getModule<T extends AbstractBaseModule>(moduleName: Modules): T {
    return this.modules[moduleName.toLowerCase()];
  }

  /**
   * Function in charge of creating a request to the given remote endpoint where RTS is running to reconstruct to the operation there,
   * and get back results.
   * @param moduleName name of the module to which the service that contains the method that needs to be executed belongs to.
   * @param serviceName name of the service to which the method that needs to the executed belongs to.
   * @param methodName name of the method that needs to be executed.
   * @param parameters parameters that need to be provided to the target method.
   * @param remoteEndpoint URL of the remote endpoint where RTS is deployed, to send the remote operation, if needed.
   */
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

  /**
   * Function in charge of look up target method and execute it with the given parameters.
   *
   * @param moduleName name of the module to which the service that contains the method that needs to be executed belongs to.
   * @param serviceName name of the service to which the method that needs to the executed belongs to.
   * @param methodName name of the method that needs to be executed.
   * @param parameters parameters that need to be provided to the target method.
   */
  async executeLocally(module: any, serviceName: string, methodName: string, parameters: any) {
    const targetService = module[serviceName];
    return targetService[methodName](parameters);
  }

  /**
   * @description
   *
   * Function in charge of whether:
   *   * Run remote execution strategy, which means creating an HTTP POST request to the given endpoint with enough
   *     information on it to reconstruct the operation on the remote RTS instance.
   *
   *   * Run operation described on method params locally.
   *
   * @param moduleName name of the module to which the service that contains the method that needs to be executed belongs to.
   * @param serviceName name of the service to which the method that needs to the executed belongs to.
   * @param methodName name of the method that needs to be executed.
   * @param parameters parameters that need to be provided to the target method.
   * @param remoteEndpoint URL of the remote endpoint where RTS is deployed, to send the remote operation, if needed.
   */
  async execute(moduleName: Modules, serviceName: string, methodName: string, parameters: any, remoteEndpoint?: string): Promise<Object[]> {
    return this.isRemote()
      ? await this.executeRemotely(moduleName, serviceName, methodName, parameters, remoteEndpoint)
      : await this.executeLocally(this.getModule(moduleName), serviceName, methodName, parameters);
  }
}
