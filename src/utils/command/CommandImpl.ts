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

  async execute(
    moduleName: ModuleType,
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
      // return await RT[moduleName](ExecutionContext.LOCAL)[serviceName](parameters);
      switch (moduleName) {
        case ModuleType.COMMONS:
          const commonsModule = CommonsModuleFactory.create(ExecutionContext.LOCAL);
          const commonsTargetService = commonsModule[serviceName];
          const commonsTargetMethod = commonsTargetService[methodName];
          return commonsTargetMethod(parameters);
        case ModuleType.EVERTOK:
          const evertokModule = EvertokModuleFactory.create(ExecutionContext.LOCAL);
          const evertokTargetService = evertokModule[serviceName];
          const evertokTargetMethod = evertokTargetService[methodName];
          return evertokTargetMethod(parameters);
      }
    }
  }
}
