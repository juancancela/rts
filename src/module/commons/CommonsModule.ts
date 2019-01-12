import BaseModule from './utils/modules/BaseModule';
import GeoLocationService from './services/geolocation/GeoLocationService';
import MessagingService from './services/messaging/MessagingService';
import AuthenticationService from './services/security/AuthenticationService';
import AuthorizationService from './services/security/AuthorizationService';
import UserService from './services/user/UserService';

export default interface CommonsModule extends BaseModule {
  getLocationService(): GeoLocationService;
  getMessagingService(): MessagingService;
  getAuthenticationService(): AuthenticationService;
  getAuthorizationService(): AuthorizationService;
  getUserService(): UserService;
}
