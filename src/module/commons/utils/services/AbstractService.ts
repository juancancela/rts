import Command from '../../../../utils/command/Command';
import Modules from '../../../../utils/modules/Modules';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractService {
  async execute(methodName: string, params: any, command: Command, serviceName: string, moduleName: Modules): Promise<any> {
    return await command.execute(moduleName, serviceName, methodName, params, 'http://localhost:8090/remote');
  }
}

export default AbstractService;
