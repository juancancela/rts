import UserPersonalData from './UserPersonalData';
import GeoLocation from '../../../../models/GeoLocation/GeoLocation';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserPersonalDataImpl implements UserPersonalData {
  private fullName: string;
  private firstName: string;
  private middleLetter: string;
  private lastName: string;
  private emailAddress: string;
  private userDefaultPosition: GeoLocation;
  private bio: string;

  constructor(
    fullName: string,
    firstName: string,
    middleLetter: string,
    lastName: string,
    emailAddress: string,
    userDefaultPosition: GeoLocation,
    bio: string
  ) {
    this.fullName = fullName;
    this.firstName = firstName;
    this.middleLetter = middleLetter;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.userDefaultPosition = userDefaultPosition;
    this.bio = bio;
  }

  getFullName(): string {
    return this.fullName;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getMiddleLetter(): string {
    return this.middleLetter;
  }
  getLastName(): string {
    return this.lastName;
  }
  getEmailAddress(): string {
    return this.emailAddress;
  }
  getUserDefaultPosition(): GeoLocation {
    return this.userDefaultPosition;
  }
  getBio(): string {
    return this.bio;
  }
}
