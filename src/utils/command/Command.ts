import Remoteable from './Remoteable';
import ModuleType from '../modules/ModuleType';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Command {
  execute(moduleName: ModuleType, service: string, methodName: string, returnType: string, parameters: any, remoteEndpoint: string): Promise<Object[]>;
}
