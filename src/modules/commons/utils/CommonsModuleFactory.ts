import AbstractFactory from '../../../utils/factory/AbstractFactory';
import CommonsModule from '../CommonsModule';
import CommonsModuleImpl from '../CommonsModuleImpl';
import GeoLocationServiceImpl from '../services/geolocation/GeoLocationServiceImpl';
import MessagingServiceImpl from '../services/messaging/MessagingServiceImpl';
import AuthenticationServiceImpl from '../services/security/AuthenticationServiceImpl';
import AuthorizationServiceImpl from '../services/security/AuthorizationServiceImpl';
import UserServiceImpl from '../services/user/UserServiceImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommonsModuleFactory implements AbstractFactory<CommonsModule> {
  static create(): CommonsModule {
    return new CommonsModuleImpl(
      new GeoLocationServiceImpl(),
      new MessagingServiceImpl(),
      new AuthenticationServiceImpl(),
      new AuthorizationServiceImpl(),
      new UserServiceImpl()
    );
  }

  create(): CommonsModule {
    return CommonsModuleFactory.create();
  }

  private constructor() {}
}
