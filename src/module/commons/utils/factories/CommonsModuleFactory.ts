import AbstractFactory from './AbstractFactory';
import GeoLocationServiceImpl from '../../../commons/services/geolocation/GeoLocationServiceImpl';
import CommonsModule from '../../CommonsModule';
import MessagingServiceImpl from '../../services/messaging/MessagingServiceImpl';
import AuthenticationServiceImpl from '../../services/security/AuthenticationServiceImpl';
import AuthorizationServiceImpl from '../../services/security/AuthorizationServiceImpl';
import UserServiceImpl from '../../services/user/UserServiceImpl';
import CommonsModuleImpl from '../../CommonsModuleImpl';
import ExecutionContext from '../constants/ExecutionContext';
import RemoteMessagingServiceImpl from '../../services/messaging/RemoteMessagingServiceImpl';

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
          new AuthenticationServiceImpl(),
          new AuthorizationServiceImpl(),
          new UserServiceImpl()
        );
    }
  }

  create(context: ExecutionContext): CommonsModule {
    return CommonsModuleFactory.create(context);
  }

  private constructor() {}
}
