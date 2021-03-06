import CommandImpl from '../command/CommandImpl';
import Command from '../command/Command';
import ModuleType from '../module/ModuleType';
import Runtime from '../environment/Runtime';

/**
 * @description base class to be used by RTS module services
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
abstract class AbstractBaseService {
  isRemote(): boolean {
    return Runtime.isRemote;
  }

  getCommand(): Command {
    return new CommandImpl();
  }

  async execute(
    methodName: string,
    params: any,
    command: Command,
    serviceName: string,
    module: ModuleType
  ): Promise<any> {
    return await command.execute(module, serviceName, methodName, params);
  }
}

export default AbstractBaseService;
