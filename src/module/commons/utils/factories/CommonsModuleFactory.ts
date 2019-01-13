import AbstractFactory from "./AbstractFactory";
import CommonsModule from "../../CommonsModule";
import ExecutionContext from "../constants/ExecutionContext";
import CommonsModuleImpl from "../../CommonsModuleImpl";
import GeoLocationServiceImpl from "../../services/geolocation/GeoLocationServiceImpl";
import MessagingServiceImpl from "../../services/messaging/MessagingServiceImpl";
import AuthenticationServiceImpl from "../../services/security/AuthenticationServiceImpl";
import AuthorizationServiceImpl from "../../services/security/AuthorizationServiceImpl";
import UserServiceImpl from "../../services/user/UserServiceImpl";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommonsModuleFactory implements AbstractFactory<CommonsModule> {
  static create(context: ExecutionContext): CommonsModule {
    const isRemote = context === ExecutionContext.REMOTE ? true : false;
    return new CommonsModuleImpl(
      new GeoLocationServiceImpl(isRemote),
      new MessagingServiceImpl(isRemote),
      new AuthenticationServiceImpl(isRemote),
      new AuthorizationServiceImpl(isRemote),
      new UserServiceImpl(isRemote)
    );
  }

  create(context: ExecutionContext): CommonsModule {
    return CommonsModuleFactory.create(context);
  }

  private constructor() {}
}
