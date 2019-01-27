import Modules from '../modules/Modules';
import AbstractBaseModule from '../../modules/commons/utils/modules/AbstractBaseModule';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Command {
  execute(moduleName: Modules, service: string, methodName: string, parameters: any): Promise<Object[]>;
  getModule<T extends AbstractBaseModule>(moduleType: Modules): T;
}
