import AuthenticationServiceImpl from "./AuthenticationServiceImpl";
import remote from "../../utils/decorators/remote";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteAuthenticationServiceImpl extends AuthenticationServiceImpl {}
