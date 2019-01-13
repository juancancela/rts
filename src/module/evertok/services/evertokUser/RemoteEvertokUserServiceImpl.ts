import EvertokUserServiceImpl from "./EvertokUserServiceImpl";
import remote from "../../../commons/utils/decorators/remote";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteEvertokUserServiceImpl extends EvertokUserServiceImpl {}
