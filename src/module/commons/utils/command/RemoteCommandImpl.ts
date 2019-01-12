import CommandImpl from './CommandImpl';
import remote from '../decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteCommandImpl extends CommandImpl {}
