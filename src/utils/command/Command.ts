import AbstractBaseModule from '../module/AbstractBaseModule';
import ModuleType from '../constant/ModuleType';

/**
 * @description Contract to be implemented by commands
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Command {
  execute(moduleName: ModuleType, service: string, methodName: string, parameters: any): Promise<Object[]>;
  getModule<T extends AbstractBaseModule>(moduleType: ModuleType): T;
}
