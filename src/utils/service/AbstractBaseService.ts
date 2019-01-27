import CommandImpl from '../command/CommandImpl';
import Config from '../../config/Config';
import Command from '../command/Command';
import ModuleType from '../constant/ModuleType';

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

  async execute(methodName: string, params: any, command: Command, serviceName: string, module: ModuleType): Promise<any> {
    return await command.execute(module, serviceName, methodName, params);
  }
}

export default AbstractBaseService;
