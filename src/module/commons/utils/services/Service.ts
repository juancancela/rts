import Remoteable from '../../../../utils/command/Remoteable';
import Modules from '../../../../utils/modules/Modules';

/**
 * Base interface that must be implemented by RTS services.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Service extends Remoteable {
  getModuleName(): Modules;
  getServiceName(): string;
}
