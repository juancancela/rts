import UserPersonalData from '../UserPersonalData/UserPersonalData';
import BaseResource from '../../../../models/BaseResource/BaseResource';

export default interface User extends BaseResource {
  getUserPersonalData(): UserPersonalData;
  getTag(): string;
  setAvatar(file: any): void;
  getAvatar(): string;
}
