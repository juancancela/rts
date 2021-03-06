import Command from './utils/command/Command';
import CommandImpl from './utils/command/CommandImpl';
import CommonsModuleFactory from './modules/commons/utils/CommonsModuleFactory';
import EvertokModuleFactory from './modules/evertok/utils/factories/EvertokModuleFactory';
import CommonsModule from './modules/commons/CommonsModule';
import EvertokModule from './modules/evertok/EvertokModule';
import Runtime from './utils/environment/Runtime';

/**
 * @description Randiantech Services (RTS) entry point.
 *
 * RTS emcompasses a set of data services used by Randiantech applications.
 * RTS is organized as a set of Modules that bundle a set of Services, each of
 * them providing a set of service operations.
 *
 * RTS services are implemented using a dual/hybrid/remote architecture, so they
 * can be executed from remote locations (IE: A React Native app, a web app, or
 * even another backend service). In order to achieve that, every service operation
 * is annotated with a @remote decorator that updates implementation on runtime
 * to remotely -and transparently- execute the operation on the server side.
 * In example, given a service T with an operation O, if O is annotated with @remote
 * decorator, it will under the hood send an HTTP request describing the target
 * operation (including the name of the module and service to which it belongs to,
 * as well as the operation name and parameters) and will proceed to reconstruct
 * the operation locally on the server. This is conceptually similar to Java's RMI
 * (Remote Method Invokation) api.
 *
 * Limitations:
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
  /**
   * command is used to interact with RTS operation services, abstracting away
   * the context of execution.
   */
  private command: Command = new CommandImpl();

  /**
   * RTS Commons module
   */
  private commonsModule = CommonsModuleFactory.create();

  /**
   * RTS Evertok module
   */
  private evertokModule = EvertokModuleFactory.create();

  /**
   * @param executionContext sets execution context. If not provided,
   * defaults to local.
   */
  constructor(isRemote: boolean = false, serverBaseUrl: string, apiBaseUrl: string) {
    Runtime.isRemote = isRemote;
    Runtime.serverBaseUrl = serverBaseUrl;
    Runtime.apiBaseUrl = apiBaseUrl;
  }

  /**
   * @returns Command instance
   */
  getCommand(): Command {
    return this.command;
  }

  /**
   * @returns Commons Services Module
   */
  getCommonsModule(): CommonsModule {
    return this.commonsModule;
  }

  /**
   * @returns Evertok Services Module
   */
  getEvertokModule(): EvertokModule {
    return this.evertokModule;
  }

  getIsRemote(): boolean {
    return Runtime.isRemote;
  }

  setIsRemote(isRemote: boolean): void {
    Runtime.isRemote = isRemote;
  }

  getServerBaseUrl(): string {
    return Runtime.serverBaseUrl;
  }

  setServerBaseUrl(serverBaseUrl: string): void {
    Runtime.serverBaseUrl = serverBaseUrl;
  }

  getApiBaseUrl(): string {
    return Runtime.apiBaseUrl;
  }

  setApiBaseUrl(apiBaseUrl: string): void {
    Runtime.apiBaseUrl = apiBaseUrl;
  }
}
