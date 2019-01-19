import Remoteable from './Remoteable';
import Modules from '../modules/Modules';
import BaseModule from '../../module/commons/utils/modules/BaseModule';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Command {
  execute(moduleName: Modules, service: string, methodName: string, parameters: any, remoteEndpoint: string): Promise<Object[]>;
  getModule<T extends BaseModule>(moduleType: Modules): T;
}
