import Remoteable from '../command/Remoteable';
import ModuleType from '../constant/ModuleType';

/**
 * Base interface that must be implemented by RTS services.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Service extends Remoteable {
  getModuleName(): ModuleType;
  getServiceName(): string;
}
