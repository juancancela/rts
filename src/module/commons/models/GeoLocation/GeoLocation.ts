import BaseResource from "../BaseResource/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocation extends BaseResource {
  getLat(): Number;
  getLon(): Number;
}
