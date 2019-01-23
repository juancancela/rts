/**
 * Application Configurations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class Config {
  public static isRemote: boolean = true;
  public static port: number = 8090;
  public static serverBaseUrl = `http://localhost:${Config.port}`;
  public static apiBaseUrl = `${Config.serverBaseUrl}/remote`;
  public static rocketChatUrl = 'http://localhost:3000/api/v1/';
}
