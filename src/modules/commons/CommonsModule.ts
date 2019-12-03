import AbstractBaseModule from '../../utils/module/AbstractBaseModule';
import GeoLocationService from './services/geolocation/GeoLocationService';
import MessagingService from './services/messaging/MessagingService';
import AuthenticationService from './services/security/AuthenticationService';
import AuthorizationService from './services/security/AuthorizationService';
import UserService from './services/user/UserService';

/**
 * @description Base interface to be implemented by RTS modules.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface CommonsModule extends AbstractBaseModule {
  getLocationService(): GeoLocationService;
  getMessagingService(): MessagingService;
  getAuthenticationService(): AuthenticationService;
  getAuthorizationService(): AuthorizationService;
  getUserService(): UserService;
}
