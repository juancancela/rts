import BaseService from './BaseService';
import Commandable from '../command/Commandable';
import Command from '../command/Command';
import RemoteCommandImpl from '../command/RemoteCommandImpl';
import CommandImpl from '../command/CommandImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default abstract class AbstractService implements BaseService, Commandable {
  private isRemoteExecution: boolean = false;
  private remoteCommand: Command = new RemoteCommandImpl();
  private command: Command = new CommandImpl();

  getCommand(): Command {
    if (this.isRemote()) return this.remoteCommand;
    return this.command;
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }
}
