import Resource from '../../utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingServerMetadata extends Resource {
  getInfo(): string;
  getStatistics(): string;
}
