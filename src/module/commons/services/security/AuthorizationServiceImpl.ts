import AuthorizationService from './AuthorizationService';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Modules from '../../../../utils/modules/Modules';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl implements AuthorizationService, Commandable {
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

    getModuleName(): Modules {
      return Modules.COMMONS;
    }

    getServiceName(): string {
      return 'authorizationService';
    }
}
