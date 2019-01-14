import Command from "./utils/command/Command";
import CommandImpl from "./utils/command/CommandImpl";
import CommonsModuleFactory from "./module/commons/utils/factories/CommonsModuleFactory";
import ExecutionContext from "./module/commons/utils/constants/ExecutionContext";
import EvertokModuleFactory from "./module/evertok/utils/factories/EvertokModuleFactory";
import CommonsModule from "./module/commons/CommonsModule";
import EvertokModule from "./module/evertok/EvertokModule";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RT {
    private static command: Command = new CommandImpl(false);
    private static remoteCommand: Command = new CommandImpl(true);
    private static commonsModule = CommonsModuleFactory.create(ExecutionContext.LOCAL);
    private static remoteCommonsModule = CommonsModuleFactory.create(ExecutionContext.REMOTE);
    private static evertokModule = EvertokModuleFactory.create(ExecutionContext.LOCAL);
    private static remoteEvertokModule = EvertokModuleFactory.create(ExecutionContext.REMOTE);
  
    private constructor() {}
  
    static getCommand(): Command {
      return this.command;
    }
  
    static getRemoteCommand(): Command {
      return this.remoteCommand;
    }
  
    static getCommonsModule(executionContext: ExecutionContext): CommonsModule {
      switch (executionContext) {
        case ExecutionContext.LOCAL:
          return this.commonsModule;
        case ExecutionContext.REMOTE:
          return this.remoteCommonsModule;
      }
    }
  
    static getEvertokModule(executionContext: ExecutionContext): EvertokModule {
      switch (executionContext) {
        case ExecutionContext.LOCAL:
          return this.evertokModule;
        case ExecutionContext.REMOTE:
          return this.remoteEvertokModule;
      }
    }
  }