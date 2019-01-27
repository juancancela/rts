import Command from './Command';
import fetch from 'node-fetch';
import CommonsModuleFactory from '../../modules/commons/utils/CommonsModuleFactory';
import EvertokModuleFactory from '../../modules/evertok/utils/factories/EvertokModuleFactory';
import AbstractBaseModule from '../module/AbstractBaseModule';
import Config from '../../config/Config';
import ModuleType from '../constant/ModuleType';

/**
 * @description
 * TBD
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommandImpl implements Command {
  private modules = {
    commons: CommonsModuleFactory.create(),
    evertok: EvertokModuleFactory.create()
  };

  getModule<T extends AbstractBaseModule>(moduleName: ModuleType): T {
    return this.modules[moduleName.toLowerCase()];
  }

  /**
   * @description
   * Function in charge of creating a request to the given remote endpoint where RTS is running to reconstruct to the operation there,
   * and get back results.
   * @param moduleName name of the module to which the service that contains the method that needs to be executed belongs to.
   * @param serviceName name of the service to which the method that needs to the executed belongs to.
   * @param methodName name of the method that needs to be executed.
   * @param parameters parameters that need to be provided to the target method.
   */
  async executeRemotely(moduleName: ModuleType, serviceName: string, methodName: string, parameters: any) {
    return (await fetch(Config.apiBaseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ moduleName, serviceName, methodName, parameters })
    })).json();
  }

  /**
   * @description
   * Function in charge of look up target method and execute it with the given parameters.
   *
   * @param moduleName name of the module to which the service that contains the method that needs to be executed belongs to.
   * @param serviceName name of the service to which the method that needs to the executed belongs to.
   * @param methodName name of the method that needs to be executed.
   * @param parameters parameters that need to be provided to the target method.
   */
  async executeLocally(module: any, serviceName: string, methodName: string, parameters: any) {
    const targetService = module[serviceName];
    return await targetService[methodName](parameters);
  }

  /**
   * @description
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
   */
  async execute(moduleName: ModuleType, serviceName: string, methodName: string, parameters: any): Promise<Object[]> {
    if (Config.isRemote === true) {
      return await this.executeRemotely(moduleName, serviceName, methodName, parameters);
    } else {
      return await this.executeLocally(this.getModule(moduleName), serviceName, methodName, parameters);
    }
  }
}
