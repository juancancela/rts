/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface UserPersonalData {
  getFullName(): string;
  getFirstName(): string;
  getMiddleLetter(): string;
  getLastName(): string;
  getEmailAddress(): string;
  getUserDefaultPosition(): Position;
  getBio(): string;
}