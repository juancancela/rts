import Command from './utils/command/Command';
import CommandImpl from './utils/command/CommandImpl';
import CommonsModuleFactory from './module/commons/utils/factories/CommonsModuleFactory';
import EvertokModuleFactory from './module/evertok/utils/factories/EvertokModuleFactory';
import CommonsModule from './module/commons/CommonsModule';
import EvertokModule from './module/evertok/EvertokModule';

/**
 * Randiantech Services (RTS) entry point.
 * =======================================
 *
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RTS {
  private static command: Command = new CommandImpl();
  private static commonsModule = CommonsModuleFactory.create();
  private static evertokModule = EvertokModuleFactory.create();

  private constructor() {}

  static getCommand(): Command {
    return this.command;
  }

  /**
   * @param executionContext The context of execution
   * @returns Commons Services Module
   */
  static getCommonsModule(): CommonsModule {
    return this.commonsModule;
  }

  /**
   * @param executionContext The context of execution
   * @returns Evertok Services Module
   */
  static getEvertokModule(): EvertokModule {
    return this.evertokModule;
  }
}
