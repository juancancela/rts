import AuthenticationService from './AuthenticationService';
import Identity from '../../models/Identity/Identity';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl implements AuthenticationService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  login(identity: Identity): boolean {
    throw new Error('Method not implemented.');
  }
  signUp(identity: Identity, user: User): User {
    throw new Error('Method not implemented.');
  }
  recoverPassword(identity: Identity): void {
    throw new Error('Method not implemented.');
  }
}
