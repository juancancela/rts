import remote from '../../utils/decorators/remote';
import UserServiceImpl from './UserServiceImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteUserServiceImpl extends UserServiceImpl {}
