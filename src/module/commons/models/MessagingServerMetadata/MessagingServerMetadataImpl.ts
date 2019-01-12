import MessagingServerMetadata from './MessagingServerMetadata';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServerMetadataImpl implements MessagingServerMetadata {
  getInfo(): string {
    throw new Error('Method not implemented.');
  }
  getStatistics(): string {
    throw new Error('Method not implemented.');
  }
}
