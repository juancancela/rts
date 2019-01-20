import Command from '../../../../utils/command/Command';
import Modules from '../../../../utils/modules/Modules';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractBaseService {
  async execute(methodName: string, params: any, command: Command, serviceName: string, moduleName: Modules): Promise<any> {
    return await command.execute(moduleName, serviceName, methodName, params, process.env.RT_API_PATH);
  }
}

export default AbstractBaseService;
