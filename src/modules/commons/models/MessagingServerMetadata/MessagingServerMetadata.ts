import Resource from '../../../../utils/resource/Resource';

/**
 * Contract that specifies retrievable metadata of the messaging server
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingServerMetadata extends Resource {
  /**
   * @returns general info about messaging server
   */
  getInfo(): string;

  /**
   * @returns statistics of runtime execution of the messaging server
   */
  getStatistics(): string;
}
