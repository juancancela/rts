import BaseResource from "../../utils/resources/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocation extends BaseResource {
  getLat(): number;
  getLon(): number;
}
