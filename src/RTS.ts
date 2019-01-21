import Command from './utils/command/Command';
import CommandImpl from './utils/command/CommandImpl';
import CommonsModuleFactory from './module/commons/utils/factories/CommonsModuleFactory';
import EvertokModuleFactory from './module/evertok/utils/factories/EvertokModuleFactory';
import CommonsModule from './module/commons/CommonsModule';
import EvertokModule from './module/evertok/EvertokModule';

/**
 * @description
 * Randiantech Services (RTS) entry point.
 * =======================================
 *
 * RTS emcompasses a set of data services used by Randiantech applications.
 * RTS is organized as a set of Modules that bundle a set of Services, each of
 * them providing a set of operations.
 *
 * RTS services are implemented using a dual/hybrid/remote architecture, so they
 * can be executed from remote locations (IE: A React Native app, a web app, or
 * even another backend service). In order to archive that, every service operation
 * is annotated with a @remote decorator that updates implementation on runtime
 * to remotely -and transparently- execute the operation on the server side.
 * In example, given a service T with an operation O, if O is annotated with @remote
 * decorator, it will under the hood send an HTTP request describing the target
 * operation (including the name of the module and service to which it belongs to,
 * as well as the operation name and parameters) and will proceed to reconstruct
 * the operation locally on the server. This is conceptually similar to Java's RMI
 * (Remote Method Invokation) api.
 * Config.isRemote variable will be read to determine if the operation is executed
 * locally or remotely.
 *
 * Integration steps:
 * ==================
 *
 * 1. From a client (React Native, a web app, etc.) import RTS package:
 * => import { rts } from 'rt-services';
 *
 * 2. Set Config.isRemote to true:
 * => import Config from 'rt-services/src/config/Config';
 * => Config.isRemote = true;
 *
 * 3. Start using RTS services
 *
 *
 * Execution flow:
 * ===============
 *
 * 1. Once a client imported RTS, it can execute an O operation of a service
 *    S as follows:
 *
 * import { rts } from 'rt-services';
 *
 * rts.M(void).S(void).O(params: any);
 *
 * In example, if RTS contains a module Commons, with a service User, and an
 * opeation getUser(userId: string), UI code will look like this:
 *
 * let user = rts.getCommons().getUserService().getUser('1');
 *
 *
 * Limitations:
 * ============
 *
 * * Service operation attributes cant be correctly assigned to its own
 *   constructors, then class methods are not accessible when the service
 *   invokation started remotely.
 *
 * * RTS heavily relies on Typescript (TS) to transfer typing data between local
 *   and remote operations, thus at the moment is required to have TS both on
 *   client and server. Eventually it would work on any ES6 compliant runtime.
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
   * @returns Commons Services Module
   */
  static getCommonsModule(): CommonsModule {
    return this.commonsModule;
  }

  /**
   * @returns Evertok Services Module
   */
  static getEvertokModule(): EvertokModule {
    return this.evertokModule;
  }
}
