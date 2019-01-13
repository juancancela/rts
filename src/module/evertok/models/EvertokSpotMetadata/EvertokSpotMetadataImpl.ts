import Serializable from '../../../commons/utils/serialization/Serializable';
import EvertokSpotMetadata from './EvertokSpotMetadata';
import User from '../../../commons/services/user/models/User/User';

export default class EvertokSpotMetadataImpl implements EvertokSpotMetadata, Serializable<EvertokSpotMetadataImpl> {
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getMembersCount(): number {
    throw new Error('Method not implemented.');
  }
  getUnreadMessages(user: User): number {
    throw new Error('Method not implemented.');
  }
  getLastDateOfRead(user: User): number {
    throw new Error('Method not implemented.');
  }
  getMessagesCount(): number {
    throw new Error('Method not implemented.');
  }
  getUserMentions(user: User): number {
    throw new Error('Method not implemented.');
  }
  fromJSON(serializedObject: Object): EvertokSpotMetadataImpl {
    throw new Error('Method not implemented.');
  }
}
