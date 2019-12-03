import MessagingServerMetadata from './MessagingServerMetadata';

/**
 * Contract that specifies retrievable metadata of the messaging server
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServerMetadataImpl implements MessagingServerMetadata {
  /**
   * @returns id of the messaging server metadata object
   */
  getId(): string {
    throw new Error('Method not implemented.');
  }

  /**
   * @returns general info about messaging server
   */
  getInfo(): string {
    throw new Error('Method not implemented.');
  }

  /**
   * @returns statistics of runtime execution of the messaging server
   */
  getStatistics(): string {
    throw new Error('Method not implemented.');
  }
}
