import MessagingServerMetadata from './MessagingServerMetadata';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServerMetadataImpl
  implements MessagingServerMetadata, Serializable<MessagingServerMetadataImpl> {

  getId(): string {
    throw new Error('Method not implemented.');
  }

  getInfo(): string {
    throw new Error('Method not implemented.');
  }
  
  getStatistics(): string {
    throw new Error('Method not implemented.');
  }

  fromJSON(serializedObject: Object): MessagingServerMetadataImpl {
    throw new Error('Method not implemented.');
  }
}
