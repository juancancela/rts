import AuthorizationServiceImpl from "./AuthorizationServiceImpl";
import remote from "../../utils/decorators/remote";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteAuthorizationServiceImpl extends AuthorizationServiceImpl {}
