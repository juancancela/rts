import CommandImpl from './CommandImpl';
import remote from '../decorators/remote';

@remote
export default class RemoteCommandImpl extends CommandImpl {}
