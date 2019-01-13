import GeoLocation from "../../../../models/GeoLocation/GeoLocation";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface UserPersonalData {
  getFullName(): string;
  getFirstName(): string;
  getMiddleLetter(): string;
  getLastName(): string;
  getEmailAddress(): string;
  getUserDefaultGeoLocation(): GeoLocation;
  getBio(): string;
}