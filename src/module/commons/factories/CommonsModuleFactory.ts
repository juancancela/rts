import AbstractFactory from '../utils/factories/AbstractFactory';
import GeoLocationServiceImpl from '../services/geolocation/GeoLocationServiceImpl';
import CommonsModule from '../CommonsModule';
import MessagingServiceImpl from '../services/messaging/MessagingServiceImpl';
import AuthenticationServiceImpl from '../services/security/AuthenticationServiceImpl';
import AuthorizationServiceImpl from '../services/security/AuthorizationServiceImpl';
import UserServiceImpl from '../services/user/UserServiceImpl';
import CommonsModuleImpl from '../CommonsModuleImpl';
import ExecutionContext from '../utils/constants/ExecutionContext';
import RemoteMessagingServiceImpl from '../services/messaging/RemoteMessagingServiceImpl';
import RemoteAuthenticationServiceImpl from '../services/security/RemoteAuthenticationServiceImpl';
import RemoteAuthorizationServiceImpl from '../services/security/RemoteAuthorizationServiceImpl';
import RemoteUserServiceImpl from '../services/user/RemoteUserServiceImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommonsModuleFactory implements AbstractFactory<CommonsModule> {
  static create(context: ExecutionContext): CommonsModule {
    switch (context) {
      case ExecutionContext.LOCAL:
        return new CommonsModuleImpl(
          new GeoLocationServiceImpl(),
          new MessagingServiceImpl(),
          new AuthenticationServiceImpl(),
          new AuthorizationServiceImpl(),
          new UserServiceImpl()
        );

      case ExecutionContext.REMOTE:
        return new CommonsModuleImpl(
          new GeoLocationServiceImpl(),
          new RemoteMessagingServiceImpl(),
          new RemoteAuthenticationServiceImpl(),
          new RemoteAuthorizationServiceImpl(),
          new RemoteUserServiceImpl()
        );
    }
  }

  create(context: ExecutionContext): CommonsModule {
    return CommonsModuleFactory.create(context);
  }

  private constructor() {}
}
