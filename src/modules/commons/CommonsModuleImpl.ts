import GeoLocationService from './services/geolocation/GeoLocationService';
import MessagingService from './services/messaging/MessagingService';
import AuthenticationService from './services/security/AuthenticationService';
import AuthorizationService from './services/security/AuthorizationService';
import UserService from './services/user/UserService';
import CommonsModule from './CommonsModule';
import Service from '../../utils/service/Service';

/**
 * @description
 * Commons Module
 * ===============================
 * Module Services:
 *   * Geolocation
 *   * Messaging
 *   * Authentication
 *   * Authorization
 *   * User Management
 *
 * Commons module emcompasses the fundational, core services provided by RTS platform.
 * They are widely used throughout rest of RTS services.
 *
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class CommonsModuleImpl implements CommonsModule {
  private geoLocationService: GeoLocationService;
  private messagingService: MessagingService;
  private authenticationService: AuthenticationService;
  private authorizationService: AuthorizationService;
  private userService: UserService;

  constructor(
    geoLocationService: GeoLocationService,
    messagingService: MessagingService,
    authenticationService: AuthenticationService,
    authorizationService: AuthorizationService,
    userService: UserService
  ) {
    this.geoLocationService = geoLocationService;
    this.messagingService = messagingService;
    this.authenticationService = authenticationService;
    this.authorizationService = authorizationService;
    this.userService = userService;
  }

  getServices(): Service[] {
    return [
      this.getLocationService(),
      this.getMessagingService(),
      this.getAuthenticationService(),
      this.getAuthorizationService(),
      this.getUserService()
    ];
  }

  getLocationService(): GeoLocationService {
    return this.geoLocationService;
  }

  getMessagingService(): MessagingService {
    return this.messagingService;
  }

  getAuthenticationService(): AuthenticationService {
    return this.authenticationService;
  }

  getAuthorizationService(): AuthorizationService {
    return this.authorizationService;
  }

  getUserService(): UserService {
    return this.userService;
  }
}
