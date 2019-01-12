import GeoLocation from "../../../../models/GeoLocation/GeoLocation";

export default interface UserPersonalData {
  getFullName(): string;
  getFirstName(): string;
  getMiddleLetter(): string;
  getLastName(): string;
  getEmailAddress(): string;
  getUserDefaultGeoLocation(): GeoLocation;
  getBio(): string;
}