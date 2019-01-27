import Command from '../../../../utils/command/Command';
import Modules from '../../../../utils/modules/Modules';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Config from '../../../../config/Config';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractBaseService {
  isRemote(): any {
    return Config.isRemote;
  }

  getCommand(): Command {
    return new CommandImpl();
  }

  async execute(methodName: string, params: any, command: Command, serviceName: string, moduleName: Modules): Promise<any> {
    return await command.execute(moduleName, serviceName, methodName, params);
  }
}

export default AbstractBaseService;
