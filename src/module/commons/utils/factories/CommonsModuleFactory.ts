import AbstractFactory from './AbstractFactory';
import GeoLocationServiceImpl from '../../../commons/services/geolocation/GeoLocationServiceImpl';
import CommonsModule from '../../CommonsModule';
import MessagingServiceImpl from '../../services/messaging/MessagingServiceImpl';
import AuthenticationServiceImpl from '../../services/security/AuthenticationServiceImpl';
import AuthorizationServiceImpl from '../../services/security/AuthorizationServiceImpl';
import UserServiceImpl from '../../services/user/UserServiceImpl';
import CommonsModuleImpl from '../../CommonsModuleImpl';

export default class CommonsModuleFactory implements AbstractFactory<CommonsModule> {
  static create(): CommonsModule {
    const geoLocationService = new GeoLocationServiceImpl();
    const messagingService = new MessagingServiceImpl();
    const authenticationService = new AuthenticationServiceImpl();
    const authorizationService = new AuthorizationServiceImpl();
    const userService = new UserServiceImpl();

    return new CommonsModuleImpl(
      geoLocationService,
      messagingService,
      authenticationService,
      authorizationService,
      userService
    );
  }

  create(): CommonsModule {
      return CommonsModuleFactory.create();
  }

  private constructor() {}
}
