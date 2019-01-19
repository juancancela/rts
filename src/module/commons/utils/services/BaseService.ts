import Remoteable from "../../../../utils/command/Remoteable";
import Modules from "../../../../utils/modules/Modules";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface BaseService extends Remoteable {
    getModuleName(): Modules;
    getServiceName(): string;
}
