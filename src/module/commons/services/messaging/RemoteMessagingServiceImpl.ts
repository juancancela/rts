import MessagingServiceImpl from './MessagingServiceImpl';
import remote from '../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteMessagingServiceImpl extends MessagingServiceImpl {}
