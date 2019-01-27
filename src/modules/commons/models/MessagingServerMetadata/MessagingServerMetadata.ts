import Resource from '../../../../utils/resource/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingServerMetadata extends Resource {
  getInfo(): string;
  getStatistics(): string;
}
